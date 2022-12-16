import { FilterForm } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from '../../../redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/selectors';

import { TextField, Typography } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function filterName(event) {
    dispatch(filterContacts(event.currentTarget.value));
  }

  return (
    <FilterForm sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Typography
        variant="body"
        component="lable"
        color="primary.contrastText"
      ></Typography>
      <TextField
        label="find your contact"
        variant="outlined"
        type="text"
        value={filter}
        onChange={filterName}
      />
    </FilterForm>
  );
};
