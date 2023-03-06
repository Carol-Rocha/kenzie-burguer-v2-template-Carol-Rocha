import { ReactNode } from 'react';

export interface iProductsProvider {
  getProducts: () => Promise<iProduct[]>;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iProductProviderProps {
  children: ReactNode;
}
