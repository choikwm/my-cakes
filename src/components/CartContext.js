import React, { useState } from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <CartContext.Provider value={{ totalItems, setTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
