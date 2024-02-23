import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ICart } from "../components/CartItem";

interface CartContext {
  cart: ICart[];
  setCart: React.Dispatch<SetStateAction<ICart[]>>;
}

const CartContext = createContext<CartContext>({ cart: [], setCart: () => {} });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ICart[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
