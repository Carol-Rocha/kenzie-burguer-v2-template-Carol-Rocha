import { useNavigate } from 'react-router-dom';
import { MdShoppingCart, MdLogout } from 'react-icons/md';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { useCartContext } from '../../context/CartContext';

const Header = () => {
  const { setIsOpen } = useCartContext();

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={logOut}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
