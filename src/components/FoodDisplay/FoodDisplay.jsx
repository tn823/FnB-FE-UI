import "./FoodDisplay.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import { assets } from "./../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodDisplay = ({ category = "All", products = [] }) => {
  const { getTotalCartQuantity, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <div className="food-items-container">
        <div className="food-items-grid">
          {products.map((product) => {
            // Kiểm tra categoryName tồn tại trong Category trước khi so sánh
            const productCategoryName = product.Category?.categoryName || "";
            
            // Hiển thị tất cả sản phẩm nếu category === "All" hoặc trùng với category hiện tại
            if (category === "All" || category === productCategoryName) {
              return <FoodItem key={product.id} product={product} />;
            }
            return null;
          })}
        </div>
      </div>

      <div className="basket">
        <Link to="/cart">
          <img src={assets.basket_icon} alt="Basket" />
          {getTotalCartQuantity() > 0 && (
            <span className="basket-count">{getTotalCartQuantity()}</span>
          )}
        </Link>
      </div>

      {getTotalCartAmount() > 0 && (
        <div className="order-total">
          <p>Thành Tiền</p>
          <p>
            {(
              getTotalCartAmount() +
              getTotalCartAmount() * 0.08
            ).toLocaleString("vi-VN")}{" "}
            ₫
          </p>
        </div>
      )}
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string, // Category hiện tại, mặc định là "All"
  products: PropTypes.array,  // Mảng chứa danh sách sản phẩm
};

export default FoodDisplay;
