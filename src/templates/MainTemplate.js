import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import PageProvider from 'context/PageContext';
import Navigation from 'components/organisms/Navigation/Navigation';
import Brands from 'components/molecules/Brands/Brands';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => (
  <PageProvider>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
      <Brands />
      <Footer />
    </ThemeProvider>
  </PageProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
