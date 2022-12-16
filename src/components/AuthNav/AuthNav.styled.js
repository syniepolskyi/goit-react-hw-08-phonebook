import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { NavLink } from 'react-router-dom';

export const Nav = styled(Box)`
  gap: 20px;
  justify-content: space-between;
`;

export const NavLinkItem = styled(NavLink)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
  background-color: #90a955;
  display: block;
    text-align: center;

  &.active {
    background-color: #336699;
  }
  :hover {
    background-color: #336699;
  }
`;
