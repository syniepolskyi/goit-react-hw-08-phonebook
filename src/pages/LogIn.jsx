import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from '@mui/material';

const LoginPage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
