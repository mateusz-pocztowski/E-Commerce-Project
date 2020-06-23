import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import twitterIcon from 'assets/icons/twitter.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import instagramIcon from 'assets/icons/instagram.svg';
import Heading from 'components/atoms/Heading/Heading';
import closeIcon from 'assets/icons/delete.svg';
import searchIcon from 'assets/icons/search.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const SidenavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: -100vw;
  width: 100vw;
  top: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.level5};
  visibility: hidden;
  opacity: 0;
  height: 100%;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
  ${({ theme }) => theme.mq.xxs} {
    width: calc(100vw - 65px);
    left: calc((100vw - 65px) * -1);
  }
  ${({ theme }) => theme.mq.xs} {
    width: 340px;
    left: -340px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible !important;
      opacity: 1 !important;
      left: 0 !important;
    `}
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.blue};
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.medium};
`;

const CloseBtn = styled(ButtonIcon)`
  filter: brightness(3);
  background-size: 60%;
`;

const SidenavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidenavLink = styled(NavLink)`
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
  transition: 0.3s;
  display: flex;
  align-items: center;
  padding: 18px;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  cursor: pointer;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.white100};
  }
  ${({ icon }) =>
    icon &&
    css`
      &:before {
        content: '';
        display: block;
        margin-right: 10px;
        width: 19px;
        height: 19px;
        filter: invert(1);
        background: url(${icon}) no-repeat center;
        background-size: 100%;
      }
    `}
`;

const SocialMediaWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  border-top: 1px solid rgba(129, 129, 129, 0.2);
`;

const SocialMedia = styled.a`
  display: block;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  transition: 0.2s;
  cursor: pointer;
  background: url(${({ icon }) => icon}) no-repeat center;
  &:hover {
    filter: brightness(120%);
  }
`;

const Sidenav = ({ toggle, isActive }) => (
  <SidenavWrapper isActive={isActive}>
    <HeadingWrapper>
      <StyledHeading>Menu</StyledHeading>
      <CloseBtn icon={closeIcon} onClick={toggle} />
    </HeadingWrapper>
    <SidenavLinksWrapper>
      <SidenavLink to="/">Home</SidenavLink>
      <SidenavLink to="/catalog">Catalog</SidenavLink>
      <SidenavLink icon={searchIcon} to="/">
        Search
      </SidenavLink>
      <SidenavLink icon={heartIcon} to="/wishlist">
        Wishlist
      </SidenavLink>
    </SidenavLinksWrapper>
    <SocialMediaWrapper>
      <SocialMedia href="#" icon={twitterIcon} />
      <SocialMedia href="#" icon={facebookIcon} />
      <SocialMedia href="#" icon={instagramIcon} />
    </SocialMediaWrapper>
  </SidenavWrapper>
);

Sidenav.propTypes = {
  toggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Sidenav;
