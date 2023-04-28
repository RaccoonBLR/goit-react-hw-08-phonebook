import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

import {
  UserMenuContainer,
  UserMenuText,
  UserMenuButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onClick = () => dispatch(logOut());

  return (
    <UserMenuContainer>
      <UserMenuText>{user.email}</UserMenuText>
      <UserMenuButton type="button" onClick={onClick}>
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
};
