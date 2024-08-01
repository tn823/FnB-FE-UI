import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./FoodItem.css";
import DetailPopup from "./DetailPopup/DetailPopup ";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, topping }) => {
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
        <img className="food-item-image" src={image} alt={name} />
        <button className="add" onClick={handleShowDetailPopup}>
          +
        </button>
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price} vnd</p>
      </div>
      {showDetailPopup && (
        <DetailPopup
          id={id}
          name={name}
          price={price}
          description={description}
          image={image}
          topping={topping}
          onClose={handleCloseDetailPopup}
          onAddToCart={handleAddToCart}
          cartQuantity={cartItems[id] ? cartItems[id].quantity : 0}
        />
      )}
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  topping: PropTypes.array,
};

export default FoodItem;
