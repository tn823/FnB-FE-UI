import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./DetailPopup.css";
import { StoreContext } from "../../context/StoreContext";

const DetailPopup = ({
  id,
  name,
  price,
  description,
  image,
  topping,
  onClose,
}) => {
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
    addToCart(id, selectedToppings);
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
        <img className="popup-image" src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price} vnd</p>
        {topping && topping.length > 0 && (
          <div className="toppings">
            {topping.map((toppingOption) => (
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  topping: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      basePrice: PropTypes.number.isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default DetailPopup;
