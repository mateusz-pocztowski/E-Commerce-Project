import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Navigation from 'components/organisms/Navigation/Navigation';
import Brands from 'components/molecules/Brands/Brands';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
      <Brands />
      <Footer />
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
