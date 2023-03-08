import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { useProductsContext } from '../../context/ProductsContext';
import { iProduct } from '../../context/ProductsContext/types';

const ProductList = () => {
  const { getProducts } = useProductsContext();

  const [productList, setProductList] = useState<iProduct[]>([]);

  useEffect(() => {
    getProducts().then(setProductList);
  }, []);

  return (
    <StyledProductList>
      {productList &&
        productList.map((product) => <ProductCard product={product} />)}
    </StyledProductList>
  );
};

export default ProductList;
