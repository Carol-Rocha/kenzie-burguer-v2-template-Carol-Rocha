import { createContext, useContext } from 'react';
import { api } from '../../services/api';
import { iProductProviderProps, iProductsProvider } from './types';

const productsContext = createContext({} as iProductsProvider);

const ProductsProvider = ({ children }: iProductProviderProps) => {
  const getProducts = async () => {
    try {
      const response = await api.get(`/products`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const value = { getProducts };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(productsContext);
  return context;
};

export default ProductsProvider;
