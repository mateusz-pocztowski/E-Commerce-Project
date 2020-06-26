import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidenav from 'components/organisms/Navigation/Sidenav';
import Topnav from 'components/organisms/Navigation/Topnav';
import SideCart from 'components/organisms/SideCart/SideCart';
import ProgressBar from 'components/organisms/Navigation/ProgressBar';

const Navigation = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isSidenavVisible, setSidenavVisibility] = useState(false);
  const [isCartVisible, setCartVisibility] = useState(false);

  const { isLoading, duration } = useSelector(({ loading }) => loading);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ProgressBar isActive={isLoading} duration={duration} />
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
      />
    </>
  );
};

export default Navigation;
