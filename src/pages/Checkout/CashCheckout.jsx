import "./CashCheckout.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../components/context/StoreContext";

const CashCheckout = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const { getTotalCartAmount, clearCart } = useContext(StoreContext);

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleClosePopup = useCallback(() => {
    clearCart();
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
      <div className="cash-checkout-logo">
        <Link to="/home" onClick={handleLogoClick}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="cash-checkout">
        <h2 className="cash-title">
          Số Tiền Quý Khách Cần Thanh Toán:{" "}
          {getTotalCartAmount() + getTotalCartAmount() * 0.08} vnd
        </h2>
        <hr />
        <div className="cash-payment-options">
          {/* IN HÓA ĐƠN KHI KHACHS HÀNG XÁC NHẬN */}
          <button
            onClick={() => setShowPopup(true)}
            className="cash-payment-button"
          >
            XÁC NHẬN
          </button>
        </div>
        {showPopup && (
          <div className="cash-popup">
            <div className="cash-popup-content">
              <h3>Thanh toán thành công</h3>
              <p>Quý khách vui lòng nhận hóa đơn</p>
              {/* SHOW HÓA ĐƠN */}
              <p>Chuyển hướng sau {countdown} giây...</p>{" "}
            </div>
          </div>
        )}
        <h3>Quý khách vui lòng xác nhận tiến hành thanh toán hoặc quay lại.</h3>
        <button
          onClick={() => navigate("/checkout")}
          className="cash-back-button"
        >
          QUAY LẠI
        </button>
      </div>
    </div>
  );
};

export default CashCheckout;
