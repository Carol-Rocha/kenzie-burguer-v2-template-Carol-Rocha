import { createContext, useContext, useState } from 'react';
import { iCartProvider, iCartProviderProps } from './types';
import { iProduct } from '../ProductsContext/types';

const cartContext = createContext({} as iCartProvider);

const CartProvider = ({ children }: iCartProviderProps) => {
  const [cartItems, setCartItems] = useState<iProduct[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const value = { isOpen, setIsOpen, cartItems, setCartItems };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(cartContext);
  return context;
};

export default CartProvider;
