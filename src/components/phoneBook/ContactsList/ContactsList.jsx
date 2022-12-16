import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import {
  getLoading,
  getError,
  selectVisibleContacts,
} from '../../../redux/contacts/selectors';
import { fetchContacts } from '../../../redux/contacts/operations';

import {
  Box,
  Grid,
  Typography,
  List,
  IconButton,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, width: 'inherit' }}>
      <Grid>
        <Typography variant="h4" component="h2">
          {' '}
          My contacts
        </Typography>
        {isLoading && !error && <b>Request in progress...</b>}
        <List>
          {contacts.length > 0
            ? contacts.map(contact => (
                <Item
                  key={contact.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch(deleteContacts(contact.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography component="p" variant="h6">
                        {contact.name}: {contact.number}
                      </Typography>
                    }
                  />
                </Item>
              ))
            : 'No contact here yet'}
        </List>
      </Grid>
    </Box>
  );
};
