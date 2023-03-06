import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const Input = ({ label, type, register, error }: iInputProps) => (
  <fieldset>
    <StyledTextField
      id={register.name}
      label={label}
      type={type}
      {...register}
    />
    <StyledParagraph fontColor='red'>{error?.message}</StyledParagraph>
  </fieldset>
);

export default Input;
