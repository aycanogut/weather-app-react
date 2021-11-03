import { createGlobalStyle } from 'styled-components';
import theme from './Theme';
import helpers from './helpers';

export const GlobalStyles = createGlobalStyle`

// global styles
html {
    font-size: 62.5%;
}

img {
    max-width: 100%;
}

body {
    font-family: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.body}
`;
