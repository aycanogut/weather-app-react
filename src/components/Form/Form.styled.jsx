import React, { useState } from 'react';
import styled from 'styled-components';
import helpers from '../helpers';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;

  @media only screen and ${helpers.device.md} {
    flex-direction: row;
    justify-content: center;
  }
`;

export default function Form({ submitSearch }) {
  const [location, setLocation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (location === '' || !location) return;

    submitSearch(location);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        placeholder="Please enter a city"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ fontSize: 26 }} />
            </InputAdornment>
          ),
          style: { backgroundColor: '#fff', fontSize: 20 },
        }}
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button type="submit" onClick={onSubmit} />
    </StyledForm>
  );
}
