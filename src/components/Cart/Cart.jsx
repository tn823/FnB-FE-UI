import "./style/Cart.css";
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
    note,
    updateNote,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  const calculateItemTotal = (item) => {
    const basePrice = parseFloat(item.price);
    const toppingsPrice = item.selectedToppings.reduce((total, topping) => {
      return total + (parseFloat(topping?.price) || 0);
    }, 0);
    return (basePrice + toppingsPrice) * item.quantity;
  };

  const handleNoteChange = (e) => {
    updateNote(e.target.value);
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
          <p>Tổng tiền</p>
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
                    x{topping.quantity} {topping.name} -{" "}
                    {parseFloat(topping.price).toLocaleString("vi-VN")}
                  </p>
                ))}
              </div>
              <p>{parseFloat(item.price).toLocaleString("vi-VN")} ₫</p>
              <div className="quantity-control">
                <button onClick={() => handleDecreaseQuantity(key)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(key)}>+</button>
              </div>
              <p>{calculateItemTotal(item).toLocaleString("vi-VN")} ₫</p>
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
        <div className="cart-promocode">
          <p>Ghi chú</p>
          <div className="cart-promocode-input">
            <input
              type="text"
              placeholder="Ghi chú"
              value={note}
              onChange={handleNoteChange}
            />
          </div>
        </div>
        <div className="cart-total">
          {/* <h2>Tổng giá đơn hàng</h2> */}
          <div>
            <div className="cart-total-details">
              <p>Tổng Hóa Đơn</p>
              <p>{getTotalCartAmount().toLocaleString("vi-VN")} ₫</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Thuế (8%)</p>
              <p>{(getTotalCartAmount() * 0.08).toLocaleString("vi-VN")} ₫</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tổng Thanh Toán</p>
              <p>{(getTotalCartAmount() * 1.08).toLocaleString("vi-VN")} ₫</p>
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
      </div>
    </div>
  );
};

export default Cart;
