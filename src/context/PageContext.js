import React, { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PageContext = createContext();

const pages = ['catalog', 'wishlist', 'cart', 'checkout'];

const PageProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [value] = pages.filter(page =>
    page.includes(pathname.replace(/[/\\]/g, '')),
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

PageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageProvider;
