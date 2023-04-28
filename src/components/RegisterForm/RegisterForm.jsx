import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  RegisterFormEl,
  RegisterFormInput,
  RegisterFormButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormEl onSubmit={handleSubmit} autoComplete="off">
      <RegisterFormInput type="text" name="name" placeholder="username" />

      <RegisterFormInput type="email" name="email" placeholder="email" />

      <RegisterFormInput
        type="password"
        name="password"
        placeholder="password"
      />

      <RegisterFormButton type="submit">Register</RegisterFormButton>
    </RegisterFormEl>
  );
};
