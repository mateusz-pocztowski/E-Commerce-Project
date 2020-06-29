import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidenav from 'components/organisms/Navigation/Sidenav';
import Topnav from 'components/organisms/Navigation/Topnav';
import SideCart from 'components/organisms/SideCart/SideCart';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';

const Navigation = () => {
  const [scrollTop, setScrollTop] = useState(window.pageYOffset);
  const [isSidenavVisible, setSidenavVisibility] = useState(false);
  const [isCartVisible, setCartVisibility] = useState(false);

  const { isLoading, duration } = useSelector(({ loading }) => loading);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.pageYOffset);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ProgressBar
        isActive={!isCartVisible && !isSidenavVisible && isLoading}
        duration={duration}
      />
      <Topnav
        isTransparent={pathname === '/' && scrollTop < 10}
        openSidenav={() => {
          setSidenavVisibility(true);
          setCartVisibility(false);
        }}
        openCart={() => {
          setCartVisibility(true);
          setSidenavVisibility(false);
        }}
      />
      <Sidenav
        close={() => setSidenavVisibility(false)}
        isActive={isSidenavVisible}
      />
      <SideCart
        close={() => setCartVisibility(false)}
        isActive={isCartVisible}
        isBarActive={isLoading}
        barDuration={duration}
      />
    </>
  );
};

export default Navigation;
