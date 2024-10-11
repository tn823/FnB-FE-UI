import "./style/CashCheckout.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../components/context/StoreContext";

const CashCheckout = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(null); // Khởi tạo countdown là null
  const { getTotalCartAmount, clearCart, cartItems, createOrder, note } =
    useContext(StoreContext);

  const handleConfirmPayment = async () => {
    setShowPopup(true);
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
      paymentType: "CASH",
      orderDetails,
    };

    try {
      await createOrder(orderData);
      setCountdown(10);
    } catch (error) {
      console.error("Lỗi khi tạo đơn hàng:", error);
    }
  };

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
    if (showPopup !== null && countdown > 0) {
      timer = setInterval(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
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
          {(getTotalCartAmount() + getTotalCartAmount() * 0.08).toLocaleString(
            "vi-VN"
          )}{" "}
          ₫
        </h2>
        <hr />
        <div className="cash-payment-options">
          <button
            onClick={handleConfirmPayment}
            className="cash-payment-button"
          >
            XÁC NHẬN
          </button>
        </div>
        {showPopup && (
          <div className="cash-popup">
            <div className="cash-popup-content">
              <h3>Thanh toán thành công</h3>
              <p>Quý khách vui lòng nhận hóa đơn và đến quầy để nhận món.</p>
              {countdown !== null && (
                <p>Chuyển hướng sau {countdown} giây...</p>
              )}{" "}
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
