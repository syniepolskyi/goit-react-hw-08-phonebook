import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Button, Typography } from '@mui/material';
import { Nav } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Nav>
      <Typography variant="body" color="primary.contrastText">
        Welcome, {user.name}
      </Typography>

      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        {' '}
        Logout
      </Button>
    </Nav>
  );
};
