import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, Container, TextField } from '@mui/material';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: { xs: '5px', sm: '20px' },
      }}
    >
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            name="name"
            required
          />

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            required
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            required
          />

          <Button variant="contained" type="submit" sx={{ mt: '10px' }}>
            Register
          </Button>
        </Form>
      </Box>
    </Container>
  );
};
