import "./style/Checkout.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../components/context/StoreContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="checkout-logo">
        <Link to="/home" onClick={handleLogoClick}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="checkout">
        <h2 className="checkout-title">
          Số Tiền Quý Khách Cần Thanh Toán:{" "}
          {(getTotalCartAmount() + getTotalCartAmount() * 0.08).toLocaleString(
            "vi-VN"
          )}{" "}
          ₫
        </h2>
        <hr />
        <h3 className="checkout-suggest">
          Quý khách có thể lựa chọn hình thức thanh toán
        </h3>
        <div className="checkout-payment-options">
          <button
            onClick={() => navigate("/qr-checkout")}
            className="checkout-payment-button"
          >
            QR CODE (APP NGÂN HÀNG)
          </button>
          <button
            onClick={() => navigate("/cash-checkout")}
            className="checkout-payment-button"
          >
            TIỀN MẶT
          </button>
        </div>
        <button
          onClick={() => navigate("/cart")}
          className="checkout-back-button"
        >
          QUAY LẠI GIỎ HÀNG
        </button>
      </div>
    </div>
  );
};

export default Checkout;
