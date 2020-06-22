import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidenav from 'components/organisms/Navigation/Sidenav';
import Topnav from 'components/organisms/Navigation/Topnav';

const Navigation = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isSidenavVisible, setSidenavVisibility] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <Topnav
        isTransparent={pathname === '/' && scrollTop < 10}
        openSidenav={() => setSidenavVisibility(true)}
      />
      <Sidenav
        toggle={() => setSidenavVisibility(false)}
        isActive={isSidenavVisible}
      />
    </>
  );
};

export default Navigation;
