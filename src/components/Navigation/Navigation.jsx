import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Nav, NavLinkItem } from './Navigation.styled';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav sx={{ display: 'flex', flexDirection:{xs:'column', sm:'inherit'} }}>
      <NavLinkItem to="/">
        <Typography variant="body" color="primary.contrastText">
          Home
        </Typography>
      </NavLinkItem>
      {isLoggedIn && (
        <NavLinkItem to="/contacts">
          <Typography variant="body1" color="primary.contrastText">
            Contacts
          </Typography>
        </NavLinkItem>
      )}
    </Nav>
  );
};
