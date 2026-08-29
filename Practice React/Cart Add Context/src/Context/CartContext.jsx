import { createContext, useState } from "react";

export const CartStore = createContext();

export const CartContext = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(true);

  return (
    <CartStore.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartStore.Provider>
  );
};
