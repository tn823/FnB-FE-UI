  import { createContext, useState, useEffect } from "react";
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

    const addToCart = (product, selectedToppings = []) => {
      setCartItems((prevCartItems) => {
        const cartItemKey = `${product.id}-${selectedToppings
          .map((t) => t.id)
          .join(",")}`;

        const newCartItems = {
          ...prevCartItems,
          [cartItemKey]: {
            id: product.id,
            name: product.name,
            price: parseFloat(product.basePrice) || 0,
            quantity: (prevCartItems[cartItemKey]?.quantity || 0) + 1,
            selectedToppings: selectedToppings.map((topping) => ({
              id: topping.id,
              name: topping.name,
              price: parseFloat(topping.basePrice) || 0,
              quantity: 1
            })),
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
        const toppingPrices = item.selectedToppings.reduce((sum, topping) => {
          return sum + topping.price;
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
