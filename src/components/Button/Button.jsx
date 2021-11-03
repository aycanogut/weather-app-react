import React from 'react';
import styled from 'styled-components';
import helpers from '../helpers';

const buttonStyle = {};

const StyledButton = styled.button`
  padding: 2rem 2.6rem;
  font-size: 1.5rem;
  font-weight: 800;
  background-color: orange;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    transition: all 0.2s ease;
  }
`;

const StyledButtonWrapper = styled.div`
  margin: 2rem;
`;

export default function ContainedButtons() {
  return (
    <StyledButtonWrapper>
      <StyledButton variant="contained" size="large">
        Search
      </StyledButton>
    </StyledButtonWrapper>
  );
}
