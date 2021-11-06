import React from 'react';
import styled from 'styled-components';
import helpers from '../helpers';
import Button from '../Button/Button';
import Card from '../Card/Card.styled';

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and ${helpers.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${helpers.device.md} {
  }

  @media only screen and ${helpers.device.lg} {
    display: flex;
    justify-content: center;
  }
`;

const Cards = ({ weather }) => {
  const days = Object.values(weather);

  return (
    <StyledCards>
      {days.map((day, index) => (
        <Card
          key={index}
          day={day.weekday}
          date={day.date}
          location={day.location}
          temperature={day.temperature}
          weatherIcon={day.weatherIcon}
          weatherDescription={day.weatherDescription}
        />
      ))}
    </StyledCards>
  );
};

export default Cards;
