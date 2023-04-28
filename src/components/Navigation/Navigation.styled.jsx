import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;

  display: inline-block;

  padding: 14px 16px;

  transition: scale 300ms;

  &:not(:last-of-type) {
    margin-right: 30px;
  }

  &:hover,
  focus {
    scale: 1.05;
  }

  &.active {
    color: #3e9cab;
    border-bottom: 3px solid;

    &:hover,
    focus {
      scale: 1;
    }
  }
`;
