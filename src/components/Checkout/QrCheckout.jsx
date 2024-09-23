import "./style/QrCheckout.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../components/context/StoreContext";

const QrCheckout = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const { getTotalCartAmount, clearCart, cartItems, createOrder, note } = useContext(StoreContext);

  const handleConfirmPayment = async () => {
    const totalPrice = getTotalCartAmount() + getTotalCartAmount() * 0.08;

    const orderDetails = Object.values(cartItems).map((item) => ({
      productId: item.id,
      name: item.name,
      basePrice: parseFloat(item.price),
      quantity: item.quantity,
      OrderDetailToppings: item.selectedToppings.map((topping) => ({
        toppingId: topping.id,
        name: topping.name,
        basePrice: parseFloat(topping.price),
        quantity: topping.quantity,
      })),
    }));

    const orderData = {
      totalPrice,
      note: note,
      status: 1,
      paymentType: "QRCODE",
      orderDetails,
    };

    try {
      await createOrder(orderData);
      setShowPopup(true);
    } catch (error) {
      console.error("Lỗi khi tạo đơn hàng:", error);
    }
  };

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
          {(getTotalCartAmount() + getTotalCartAmount() * 0.08).toLocaleString(
            "vi-VN"
          )}{" "}
          ₫
        </h2>
        <hr />
        <div className="qr-payment-options">
          <button
            onClick={(() => setShowPopup(true), handleConfirmPayment)}
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
