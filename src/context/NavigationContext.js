import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [isSidenavVisible, setSidenavVisibility] = useState(false);
  const [isSideCartVisible, setSideCartVisibility] = useState(false);

  const value = {
    openSidenav: () => setSidenavVisibility(true),
    closeSidenav: () => setSidenavVisibility(false),
    openSideCart: () => setSideCartVisibility(true),
    closeSideCart: () => setSideCartVisibility(false),
    isSidenavVisible,
    isSideCartVisible,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default NavigationProvider;
