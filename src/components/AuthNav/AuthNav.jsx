import { AuthNavContainer, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/login">Log In</AuthNavLink>
      <AuthNavLink to="/register">Sign Up</AuthNavLink>
    </AuthNavContainer>
  );
};
