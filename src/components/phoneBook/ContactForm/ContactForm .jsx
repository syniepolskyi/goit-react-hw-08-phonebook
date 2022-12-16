import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from '../../../redux/contacts/selectors';
import { Box, Button, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Form } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  function handelInputChange(event) {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  }

  function reset() {
    setName('');
    setNumber('');
  }

  function handelSubmit(event) {
    event.preventDefault();

    const contactName = [];

    for (const contact of allContacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts list`);
      return;
    }
    dispatch(addContacts({ name, number }));
    reset();
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, width: 'inherit' }}>
      <Form onSubmit={handelSubmit}>
        <Typography
          variant="body"
          component="lable"
          color="primary.contrastText"
        >
          Name
        </Typography>

        <TextField
          label="name"
          variant="outlined"
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Typography
          variant="body"
          component="lable"
          color="primary.contrastText"
        >
          Number
        </Typography>
        <TextField
          label="number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          onChange={handelInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <label>
          <Button variant="contained" startIcon={<AddIcon />} type="submit">
            Add contact
          </Button>
        </label>
      </Form>
    </Box>
  );
}
