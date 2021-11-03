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
  return (
    <StyledCards>
      <Card
        day={weather.dayOne.weekday}
        date={weather.dayOne.date}
        location={weather.dayOne.location}
        temperature={weather.dayOne.temperature}
        weatherIcon={weather.dayOne.weatherIcon}
        weatherDescription={weather.dayOne.weatherDescription}
      />
      <Card
        day={weather.dayTwo.weekday}
        date={weather.dayTwo.date}
        location={weather.dayTwo.location}
        temperature={weather.dayTwo.temperature}
        weatherIcon={weather.dayTwo.weatherIcon}
        weatherDescription={weather.dayTwo.weatherDescription}
      />
      <Card
        day={weather.dayThree.weekday}
        date={weather.dayThree.date}
        location={weather.dayThree.location}
        temperature={weather.dayThree.temperature}
        weatherIcon={weather.dayThree.weatherIcon}
        weatherDescription={weather.dayThree.weatherDescription}
      />
      <Card
        day={weather.dayFour.weekday}
        date={weather.dayFour.date}
        location={weather.dayFour.location}
        temperature={weather.dayFour.temperature}
        weatherIcon={weather.dayFour.weatherIcon}
        weatherDescription={weather.dayFour.weatherDescription}
      />
      <Card
        day={weather.dayFive.weekday}
        date={weather.dayFive.date}
        location={weather.dayFive.location}
        temperature={weather.dayFive.temperature}
        weatherIcon={weather.dayFive.weatherIcon}
        weatherDescription={weather.dayFive.weatherDescription}
      />
    </StyledCards>
  );
};

export default Cards;
