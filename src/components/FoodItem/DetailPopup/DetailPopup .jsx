import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./DetailPopup.css";
import { StoreContext } from "../../context/StoreContext";

const DetailPopup = ({ product, onClose }) => {
  const { addToCart } = useContext(StoreContext);
  const [selectedToppings, setSelectedToppings] = useState([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === "detail-popup") {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleAddToCart = () => {
    addToCart(product, selectedToppings);
    onClose();
  };

  const toggleTopping = (toppingId) => {
    setSelectedToppings((prevSelectedToppings) =>
      prevSelectedToppings.includes(toppingId)
        ? prevSelectedToppings.filter((id) => id !== toppingId)
        : [...prevSelectedToppings, toppingId]
    );
  };

  return (
    <div className="detail-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img
          className="popup-image"
          src={product.ProductImages[0]?.url}
          alt={product.name}
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.basePrice} vnd</p>
        {product.Toppings && product.Toppings.length > 0 && (
          <div className="toppings">
            {product.Toppings.map((toppingOption) => (
              <div key={toppingOption.id} className="topping-option">
                <input
                  type="checkbox"
                  id={toppingOption.id}
                  checked={selectedToppings.includes(toppingOption.id)}
                  onChange={() => toggleTopping(toppingOption.id)}
                />
                <label htmlFor={toppingOption.id}>
                  {toppingOption.name} (+{toppingOption.basePrice} vnd)
                </label>
              </div>
            ))}
          </div>
        )}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

DetailPopup.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    basePrice: PropTypes.string.isRequired,
    description: PropTypes.string,
    ProductImages: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
    Toppings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        basePrice: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailPopup;