import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
`;
export const AuthNavLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  display: block;

  padding: 10px 20px;
  border-radius: 18px;
  transition: scale 300ms, background 300ms, box-shadow 300ms;

  color: white;
  background-color: #025d6b;

  &:hover,
  focus {
    scale: 1.02;
    background-color: #3e9cab;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
