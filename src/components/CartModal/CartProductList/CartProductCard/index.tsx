import { MdDelete } from 'react-icons/md';

import { toast } from 'react-toastify';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { iProductCardProps } from '../../../ProductList/ProductCard/types';
import { useCartContext } from '../../../../context/CartContext';

const CartProductCard = ({ product }: iProductCardProps) => {
  const { setCartItems } = useCartContext();

  const removeItem = () => {
    setCartItems((prevState) =>
      prevState.filter((item) => product.id !== item.id)
    );
    toast.success('Item removido com sucesso');
  };

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={removeItem}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
