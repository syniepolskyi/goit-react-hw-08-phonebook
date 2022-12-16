import { Typography } from '@mui/material';
import { Nav } from './AuthNav.styled';
import { NavLinkItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav sx={{ display: 'flex' }}>
      <NavLinkItem to="/register">
        <Typography variant="body" color="primary.contrastText">
          Register
        </Typography>
      </NavLinkItem>
      <NavLinkItem to="/login">
        <Typography variant="body" color="primary.contrastText">
          Log In
        </Typography>
      </NavLinkItem>
    </Nav>
  );
};
