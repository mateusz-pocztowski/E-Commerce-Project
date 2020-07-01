import React, { useEffect } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import PageProvider from 'context/PageContext';
import NavigationProvider from 'context/NavigationContext';
import Navigation from 'components/organisms/Navigation/Navigation';
import Brands from 'components/molecules/Brands/Brands';
import Footer from 'components/organisms/Footer/Footer';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchProducts, fetchCategories } from 'actions';
import { featuredEndP } from 'helpers/endpoints';

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(featuredEndP));
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <PageProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <Navigation />
          {children}
        </NavigationProvider>
        <Brands />
        <Footer />
      </ThemeProvider>
    </PageProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
