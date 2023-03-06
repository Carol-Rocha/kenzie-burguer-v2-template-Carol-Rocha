import { ReactNode } from 'react';
import { iLoginFormData } from '../../components/Form/LoginForm/types';
import { iRegisterFormData } from '../../components/Form/RegisterForm/types';

export interface iUserProvider {
  registerUser: (formData: iRegisterFormData) => Promise<any>;
  loginUser: (formData: iLoginFormData) => Promise<any>;
}

export interface iUserProviderProps {
  children: ReactNode;
}
