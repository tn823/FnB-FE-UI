import "./Cart.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../components/context/StoreContext";

const Cart = () => {
  const {
    getTotalCartAmount,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    confirmRemoveItem,
    cartItems,
    confirmRemove,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  const calculateItemTotal = (item) => {
    const basePrice = parseFloat(item.price);
    const toppingsPrice = item.selectedToppings.reduce((total, toppingId) => {
      const topping = item.Toppings?.find((t) => t.id === toppingId);
      return total + (parseFloat(topping?.basePrice) || 0);
    }, 0);
    return (basePrice + toppingsPrice) * item.quantity;
  };


  return (
    <div className="cart">
      <div className="cart-logo-container">
        <Link to="/home" onClick={handleLogoClick}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Tên món</p>
          <p>Topping</p>
          <p>Đơn giá</p>
          <p>Số lượng</p>
          <p>Số tiền</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {Object.entries(cartItems).map(([key, item]) => (
          <div key={key}>
            <div className="cart-items-item">
              <p>{item.name}</p>
              <div className="cart-item-toppings">
                {item.selectedToppings.map((topping) => (
                  <p key={topping.id}>
                    x{topping.quantity} {topping.name} - {topping.price}
                  </p>
                ))}
              </div>
              <p>{item.price} vnd</p>
              <div className="quantity-control">
                <button onClick={() => handleDecreaseQuantity(key)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(key)}>+</button>
              </div>
              <p>{calculateItemTotal(item).toFixed(2)} vnd</p>
              <p onClick={() => handleRemoveItem(key)} className="cross">
                X
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      {confirmRemove && (
        <div className="confirm-remove-popup">
          <p>Bạn muốn xóa món này khỏi giỏ hàng?</p>
          <button onClick={() => confirmRemoveItem(confirmRemove, true)}>
            Có
          </button>
          <button onClick={() => confirmRemoveItem(confirmRemove, false)}>
            Không
          </button>
        </div>
      )}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng giá đơn hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng Tiền Hàng</p>
              <p>{getTotalCartAmount().toFixed(2)} vnd</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Thuế (8%)</p>
              <p>{(getTotalCartAmount() * 0.08).toFixed(2)} vnd</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tổng Thanh Toán</p>
              <p>{(getTotalCartAmount() * 1.08).toFixed(2)} vnd</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            disabled={Object.keys(cartItems).length === 0}
            className={Object.keys(cartItems).length === 0 ? "disabled" : ""}
          >
            Tiến hành thanh toán
          </button>
        </div>
        <div className="cart-promocode">
          <p>Mã khuyến mãi</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
          </div>
          <button>Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
