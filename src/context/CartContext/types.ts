import React, { ReactNode } from 'react';
import { iProduct } from '../ProductsContext/types';

export interface iCartProvider {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: iProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<iProduct[]>>;
}

export interface iCartProviderProps {
  children: ReactNode;
}
