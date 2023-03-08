import { toast } from 'react-toastify';
import { StyledProductCard } from './style';
import { iProductCardProps } from './types';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useCartContext } from '../../../context/CartContext';

const ProductCard = ({ product }: iProductCardProps) => {
  const { setCartItems } = useCartContext();

  const addToCart = () => {
    setCartItems((prevState) => [...prevState, product]);
    toast.success('Item adicionado com sucesso');
  };

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {product.category}
        </StyledParagraph>
        <StyledParagraph className='price'> R$ {product.price}</StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={addToCart}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
