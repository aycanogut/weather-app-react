import React from 'react';
import styled from 'styled-components';
import helpers from '../helpers';
import Cards from '../Cards/Cards.styled';

const StyledContainer = styled.main`
  max-width: 320px;
  margin: 0 auto;

  @media only screen and ${helpers.device.sm} {
    max-width: 420px;
  }
  @media only screen and ${helpers.device.md} {
    max-width: 500px;
  }
  @media only screen and ${helpers.device.lg} {
    max-width: 900px;
  }
`;

const Wrapper = ({ weather }) => {
  return (
    <StyledContainer>
      <Cards weather={weather} />
    </StyledContainer>
  );
};

export default Wrapper;
