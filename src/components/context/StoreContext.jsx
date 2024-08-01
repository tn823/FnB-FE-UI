import { createContext, useState, useEffect } from "react";
import { food_list } from "../../assets/assets";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [confirmRemove, setConfirmRemove] = useState(null);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId, selectedToppings = []) => {
    setCartItems((prevCartItems) => {
      const cartItemKey = `${itemId}-${selectedToppings.join(",")}`;
      const product = food_list.find((product) => product.id === itemId);

      const newCartItems = {
        ...prevCartItems,
        [cartItemKey]: {
          id: itemId,
          name: product.name,
          price: product.basePrice,
          quantity: (prevCartItems[cartItemKey]?.quantity || 0) + 1,
          selectedToppings: selectedToppings,
        },
      };
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const removeFromCart = (itemId, selectedToppings = []) => {
    setCartItems((prevCartItems) => {
      const cartItemKey = `${itemId}-${selectedToppings.join(",")}`;
      const newCartItems = { ...prevCartItems };
      delete newCartItems[cartItemKey];
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems((prevCartItems) => {
      const newCartItems = {
        ...prevCartItems,
        [itemId]: { ...prevCartItems[itemId], quantity },
      };
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const getTotalCartQuantity = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((total, item) => {
      const toppingPrices = item.selectedToppings.reduce((sum, toppingId) => {
        const topping = food_list
          .find((p) => p.id === item.id)
          ?.topping.find((t) => t.id === toppingId);
        return sum + (topping?.basePrice || 0);
      }, 0);
      return total + (item.price + toppingPrices) * item.quantity;
    }, 0);
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = {
        ...prevCartItems,
        [id]: {
          ...prevCartItems[id],
          quantity: prevCartItems[id].quantity + 1,
        },
      };
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems[id].quantity > 1) {
        const updatedCartItems = {
          ...prevCartItems,
          [id]: {
            ...prevCartItems[id],
            quantity: prevCartItems[id].quantity - 1,
          },
        };
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      } else {
        // Gọi handleRemoveItem khi số lượng giảm về 0
        const updatedCartItems = { ...prevCartItems };
        delete updatedCartItems[id];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      }
    });
  };

  const handleRemoveItem = (id) => {
    setConfirmRemove(id);
  };

  const confirmRemoveItem = (id, confirm) => {
    if (confirm) {
      setCartItems((prevCartItems) => {
        const updatedCartItems = { ...prevCartItems };
        delete updatedCartItems[id];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
    }
    setConfirmRemove(null);
  };

  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  const contextValue = {
    food_list,
    cartItems,
    confirmRemove,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getTotalCartQuantity,
    getTotalCartAmount,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    confirmRemoveItem,
    clearCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
