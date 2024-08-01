import "./IdleTimeoutPopup.css";
import { StoreContext } from "../context/StoreContext";
import { useState, useEffect, useContext } from "react";

const IdleTimeoutPopup = () => {
  const { cartItems } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (Object.keys(cartItems).length > 0) {
          setShowPopup(true);
          setCountdown(15);
        }
      }, 90000);
    };

    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("click", resetTimeout);
    window.addEventListener("scroll", resetTimeout);
    window.addEventListener("keydown", resetTimeout);

    resetTimeout();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("click", resetTimeout);
      window.removeEventListener("scroll", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, [cartItems]);

  useEffect(() => {
    let timer;
    if (showPopup && countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    } else if (showPopup && countdown === 0) {
      localStorage.clear();

      setTimeout(() => {
        window.location.href = "/";

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }, 500);
    }

    return () => clearInterval(timer);
  }, [showPopup, countdown]);

  const handleContinue = () => {
    setShowPopup(false);
    setCountdown(15);
  };

  return (
    showPopup && (
      <div className="idle-timeout-popup">
        <div className="popup-content">
          <h3>Bạn còn đó không?</h3>
          <p>
            Phiên đặt hàng của bạn sẽ tắt sau{" "}
            <span className="countdown">{countdown}</span> giây.
          </p>
          <button onClick={handleContinue}>Tiếp tục</button>
        </div>
      </div>
    )
  );
};

export default IdleTimeoutPopup;
