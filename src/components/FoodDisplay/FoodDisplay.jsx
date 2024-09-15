import "./FoodDisplay.css";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import { assets } from "./../../assets/assets";
import { StoreContext } from "../context/StoreContext";
import {ENDPOINTS} from "../../constants/common"

const FoodDisplay = ({ category = "All" }) => {
  const { getTotalCartQuantity, getTotalCartAmount } = useContext(StoreContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(ENDPOINTS.PRODUCTS);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="food-display" id="food-display">
      <div className="food-items-container">
        <div className="food-items-grid">
          {products.map((product) => {
            if (category === "All" || category === product.category) {
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
  category: PropTypes.string,
};

export default FoodDisplay;
