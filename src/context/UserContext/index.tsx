import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { iLoginFormData } from '../../components/Form/LoginForm/types';
import { iRegisterFormData } from '../../components/Form/RegisterForm/types';
import { api } from '../../services/api';
import { iUserProvider, iUserProviderProps } from './types';

const userContext = createContext({} as iUserProvider);

const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const registerUser = async (formData: iRegisterFormData) => {
    try {
      await api.post('/users', formData);
      toast.success('Conta criada com sucesso!');
    } catch (error) {
      toast.error('Ops! Algo deu errado');
    }
  };

  const loginUser = async (formData: iLoginFormData) => {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@USERID', response.data.user.id);
      navigate('/shop');
    } catch (error) {
      toast.error('Email e/ou senha incorretos!');
    }
  };

  const value = { registerUser, loginUser };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(userContext);
  return context;
};

export default UserProvider;
