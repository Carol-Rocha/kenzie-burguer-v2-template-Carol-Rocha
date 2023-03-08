import { createContext, useContext } from 'react';
import { iProductProviderProps, iProductsProvider } from './types';
import { api } from '../../services/api';

const productsContext = createContext({} as iProductsProvider);

const ProductsProvider = ({ children }: iProductProviderProps) => {
  const getProducts = async () => {
    const token = localStorage.getItem('@TOKEN');

    try {
      const response = await api.get(`/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return error;
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
