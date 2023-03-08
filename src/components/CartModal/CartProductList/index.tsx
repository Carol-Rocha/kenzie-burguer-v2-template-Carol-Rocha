import { toast } from 'react-toastify';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { iCartProductListProps } from './types';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useCartContext } from '../../../context/CartContext';

const CartProductList = ({ cartItems }: iCartProductListProps) => {
  const { setCartItems } = useCartContext();

  const calculateTotal = () => {
    const total = cartItems
      .map((item) => item.price)
      .reduce((acc, cur) => acc + cur);
    return `R$ ${total.toFixed(2)}`;
  };

  const removeAll = () => {
    setCartItems([]);
    toast.success('Seu carrinho está vazio');
  };

  return (
    <StyledCartProductList>
      <ul>
        {cartItems.map((product) => (
          <CartProductCard product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{calculateTotal()}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={removeAll}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
