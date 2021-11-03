import { useState } from 'react';
import axios from 'axios';
import getDay from '../helpers/getDay';

const baseUrl = `https://www.metaweather.com/api/location`;
const crossDomain = 'https://the-ultimate-api-challenge.herokuapp.com';
const url = `${crossDomain}/${baseUrl}`;

const useWeather = () => {
  const [weather, setWeather] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${url}/search`, {
      params: { query: location },
    });

    if (data.length === 0 || !data) {
      // throw err
    }

    return data;
  };

  const getForecast = async (woeid) => {
    const { data } = await axios(`${url}/${woeid}`);

    if (data.length === 0 || !data) {
      // throw err
    }

    return data;
  };

  const gatherWeather = (data) => {
    const dayOne = getDay(data.consolidated_weather[0], data.title);
    const dayTwo = getDay(data.consolidated_weather[1], data.title);
    const dayThree = getDay(data.consolidated_weather[2], data.title);
    const dayFour = getDay(data.consolidated_weather[3], data.title);
    const dayFive = getDay(data.consolidated_weather[4], data.title);

    setWeather({ dayOne, dayTwo, dayThree, dayFour, dayFive });
  };

  const submitRequest = async (location) => {
    const response = await getWoeid(location);
    const data = await getForecast(response[0].woeid);

    if (!data) return;

    gatherWeather(data);
  };

  return {
    weather,
    submitRequest,
  };
};

export default useWeather;
