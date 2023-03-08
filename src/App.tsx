import { ToastContainer } from 'react-toastify';
import UserProvider from './context/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './context/CartContext';
import ProductsProvider from './context/ProductsContext';

const App = () => (
  <>
    <GlobalStyles />
    <CartProvider>
      <ProductsProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </ProductsProvider>
    </CartProvider>
    <ToastContainer />
  </>
);

export default App;
