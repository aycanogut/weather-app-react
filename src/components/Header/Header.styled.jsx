import React from 'react';
import styled from 'styled-components';
import helpers from '../helpers';
import Typography from '@mui/material/Typography';

const StyledHeader = styled.header`
  display: block;
  text-align: center;
  margin: 10rem 0 4rem 0;
  font-size: 2rem;
  font-weight: 700;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        color="common.white"
        style={{ fontWeight: 500 }}
      >
        Weather App
      </Typography>
    </StyledHeader>
  );
};

export default Header;
