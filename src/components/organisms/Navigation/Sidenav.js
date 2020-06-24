import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from 'assets/icons/search.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import Aside from 'components/molecules/Aside/Aside';

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

const Sidenav = ({ close, isActive }) => (
  <Aside title="Menu" close={close} isActive={isActive} side="left">
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
      <SocialMedia type="twitter" />
      <SocialMedia type="facebook" />
      <SocialMedia type="instagram" />
    </SocialMediaWrapper>
  </Aside>
);

Sidenav.propTypes = {
  close: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Sidenav;
