import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  min-height: 220px;
  font-size: 2rem;
  margin: 1.4rem;
  text-align: center;
  padding: 1.8rem 4rem;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-out;
    background-color: #152a3e;
  }
`;

const StyledHeader = styled.header`
  margin: 1rem 0 2rem 0;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.4rem;
`;

const StyledImg = styled.img`
  margin: 0 auto;
  width: 100px;
  height: auto;
`;

const StyledTemp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 3rem 0 1rem 0;
`;

const Card = ({
  day,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => {
  return (
    <StyledCard>
      <StyledHeader>
        {day}, {date}
      </StyledHeader>
      <StyledImg src={weatherIcon} alt="" />
      <Typography
        variant="p"
        component="p"
        gutterBottom
        color="common.white"
        style={{ fontWeight: 400, marginTop: 20 }}
      >
        {weatherDescription}
      </Typography>
      <StyledTemp>
        <Typography
          variant="p"
          component="p"
          gutterBottom
          color="common.white"
          style={{ fontSize: 26, fontWeight: 700 }}
        >
          {temperature} °C
        </Typography>
      </StyledTemp>
      <StyledHeader style={{ color: 'orange', fontSize: 22 }}>
        {location}
      </StyledHeader>
    </StyledCard>
  );
};

export default Card;
