import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  Name: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});