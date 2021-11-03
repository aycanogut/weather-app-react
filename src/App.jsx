import React from 'react';
import Normalize from 'react-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme';
import { GlobalStyles } from './components/globalStyles';
import Wrapper from './components/Wrapper/Wrapper.styled';
import Header from './components/Header/Header.styled';
import Form from './components/Form/Form.styled';
import useWeather from './hooks/useWeather';

function App() {
  const { weather, submitRequest } = useWeather();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <div className="App">
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Form submitSearch={onSubmit} />
        {weather && <Wrapper weather={weather} />}
      </ThemeProvider>
    </div>
  );
}

export default App;
