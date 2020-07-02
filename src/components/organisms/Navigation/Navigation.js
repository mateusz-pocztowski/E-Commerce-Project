import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavigationContext } from 'context/NavigationContext';
import Sidenav from 'components/organisms/Navigation/Sidenav';
import Topnav from 'components/organisms/Navigation/Topnav';
import ReturnToTop from 'components/organisms/Navigation/ReturnToTop';
import SideCart from 'components/organisms/SideCart/SideCart';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import Notifications from 'components/organisms/Navigation/Notifications';

const Wrapper = styled.div`
  position: relative;
`;

const Navigation = () => {
  const [scrollTop, setScrollTop] = useState(window.pageYOffset);
  const { isLoading, duration } = useSelector(({ loading }) => loading);
  const { isSideCartVisible, isSidenavVisible } = useContext(NavigationContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.pageYOffset);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wrapper>
      <Notifications />
      <ProgressBar
        isActive={!isSideCartVisible && !isSidenavVisible && isLoading}
        duration={duration}
      />
      <Topnav isTransparent={pathname === '/' && scrollTop < 10} />
      <Sidenav />
      <SideCart isBarActive={isLoading} barDuration={duration} />
      <ReturnToTop
        isVisible={scrollTop >= 250 && !isSideCartVisible && !isSidenavVisible}
      />
    </Wrapper>
  );
};

export default Navigation;
