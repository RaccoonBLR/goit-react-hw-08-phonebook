import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  LoginFormEl,
  LoginFormInput,
  LoginFormButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormEl onSubmit={handleSubmit} autoComplete="off">
      <LoginFormInput type="email" name="email" placeholder="email" />

      <LoginFormInput type="password" name="password" placeholder="password" />

      <LoginFormButton type="submit">Log In</LoginFormButton>
    </LoginFormEl>
  );
};
