import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { loginSchema } from './loginSchema';
import { iLoginFormData } from './types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: iLoginFormData) => {
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
