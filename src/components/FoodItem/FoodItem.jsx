import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./FoodItem.css";
import DetailPopup from "./DetailPopup/DetailPopup ";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ product }) => {
  const { cartItems, addToCart } = useContext(StoreContext);
  const [showDetailPopup, setShowDetailPopup] = useState(false);

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  const handleShowDetailPopup = () => {
    setShowDetailPopup(true);
  };

  const handleCloseDetailPopup = () => {
    setShowDetailPopup(false);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={product.ProductImages[0]?.url || ""}
          alt={product.name}
        />
        <button className="add" onClick={handleShowDetailPopup}>
          +
        </button>
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{product.name}</p>
        </div>
        <p className="food-item-desc">
          {product.description || "No description available"}
        </p>
        <p className="food-item-price">{product.basePrice} vnd</p>
      </div>
      {showDetailPopup && (
        <DetailPopup
          id={product.id}
          name={product.name}
          price={product.basePrice}
          description={product.description}
          image={product.ProductImages[0]?.url}
          topping={product.Toppings}
          onClose={handleCloseDetailPopup}
          onAddToCart={handleAddToCart}
          cartQuantity={
            cartItems[product.id] ? cartItems[product.id].quantity : 0
          }
        />
      )}
    </div>
  );
};

FoodItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    description: PropTypes.string,
    ProductImages: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    Attributes: PropTypes.array,
    Toppings: PropTypes.array,
  }).isRequired,
};

export default FoodItem;
