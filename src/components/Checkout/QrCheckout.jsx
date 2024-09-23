import "./style/QrCheckout.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../components/context/StoreContext";

const QrCheckout = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(180);
  const { getTotalCartAmount, clearCart } = useContext(StoreContext);

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleClosePopup = useCallback(() => {
    clearCart();
    localStorage.removeItem("cartItems");
    navigate("/");
    window.location.reload();
  }, [clearCart, navigate]);

  useEffect(() => {
    let timer;
    if (showPopup && countdown > 0) {
      timer = setInterval(() => setCountdown(countdown - 1), 1000);
    } else if (showPopup && countdown === 0) {
      handleClosePopup();
    }
    return () => clearInterval(timer);
  }, [showPopup, countdown, handleClosePopup]);

  return (
    <div>
      <div className="qr-checkout-logo">
        <Link to="/home" onClick={handleLogoClick}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="qr-checkout">
        <h2 className="qr-title">
          Số Tiền Quý Khách Cần Thanh Toán:{" "}
          {getTotalCartAmount() + getTotalCartAmount() * 0.08} vnd
        </h2>
        <hr />
        <div className="qr-payment-options">
          <button
            onClick={() => setShowPopup(true)}
            className="qr-payment-button"
          >
            XÁC NHẬN
          </button>
        </div>
        {showPopup && (
          <div className="qr-popup">
            <div className="qr-popup-content">
              <h3>Thanh toán thành công</h3>
              <p>Quý khách vui lòng quét mã QR đẻ thanh toán </p>
              <p>Chuyển hướng sau {countdown} giây...</p>{" "}
              {/* Display countdown */}
              {/*<button onClick={handlePrintBill}>In hóa đơn</button>*/}
            </div>
          </div>
        )}
        v<h3>Quý khách vui lòng ghé quầy thanh toán để hoàn tất đơn hàng. </h3>
        <button
          onClick={() => navigate("/checkout")}
          className="qr-back-button"
        >
          QUAY LẠI
        </button>
      </div>
    </div>
  );
};

export default QrCheckout;
