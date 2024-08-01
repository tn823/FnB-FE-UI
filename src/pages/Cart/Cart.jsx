import "./Cart.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../components/context/StoreContext";

const Cart = () => {
  const {
    food_list,
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

  const calculateItemTotal = (item, cartItemKey) => {
    const basePrice = item.basePrice;
    const selectedToppings = cartItems[cartItemKey]?.selectedToppings || [];
    const toppingsPrice = selectedToppings.reduce((total, toppingId) => {
      const topping = item.topping.find((t) => t.id === toppingId);
      return total + (topping ? topping.basePrice : 0);
    }, 0);
    return (basePrice + toppingsPrice) * cartItems[cartItemKey]?.quantity;
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
        {Object.keys(cartItems).map((key) => {
          const item = food_list.find((food) => food.id === key.split("-")[0]);
          if (item && cartItems[key].quantity > 0) {
            return (
              <div key={key}>
                <div className="cart-items-item">
                  <p>{item.name}</p>
                  <div className="cart-item-toppings">
                    {cartItems[key].selectedToppings &&
                      cartItems[key].selectedToppings.map((toppingId) => {
                        const toppingName = item.topping.find(
                          (t) => t.id === toppingId
                        )?.name;
                        return <p key={toppingId}>{toppingName}</p>;
                      })}
                  </div>
                  <p>{item.basePrice} vnd</p>
                  <div className="quantity-control">
                    <button onClick={() => handleDecreaseQuantity(key)}>
                      -
                    </button>
                    <p>{cartItems[key].quantity}</p>
                    <button onClick={() => handleIncreaseQuantity(key)}>
                      +
                    </button>
                  </div>
                  <p>{calculateItemTotal(item, key)} vnd</p>
                  <p onClick={() => handleRemoveItem(key)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
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
              <p>{getTotalCartAmount()} vnd</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Thuế (8%)</p>
              <p>{getTotalCartAmount() * 0.08} vnd</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tổng Thanh Toán</p>
              <p>{getTotalCartAmount() * 0.08 + getTotalCartAmount()} vnd</p>
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
