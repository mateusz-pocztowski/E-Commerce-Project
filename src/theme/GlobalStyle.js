import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *, *::before, *::after {
    
    box-sizing: border-box;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: 0 !important;
  }

  button, button:focus, input:focus, textarea:focus, select:focus {
    outline: 0 !important;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: "color 9999s ease-out,  background-color 9999s ease-out";
      transition-delay: 9999s;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    background-color: #ffffff;
  }
`;

export default GlobalStyle;
