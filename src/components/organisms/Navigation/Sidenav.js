import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from 'assets/icons/search.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import Aside from 'components/molecules/Aside/Aside';
import Search from 'components/atoms/Search/Search';

const SidenavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidenavLink = styled(Link)`
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

const SearchSidenavLink = styled(SidenavLink)`
  background-color: transparent;
`;

const SocialMediaWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  border-top: 1px solid rgba(129, 129, 129, 0.2);
`;

const Sidenav = ({ close, isActive }) => {
  const [isSearchVisible, setSearchVisibility] = useState(false);

  return (
    <Aside title="Menu" close={close} isActive={isActive} side="left">
      <SidenavLinksWrapper>
        <SidenavLink onClick={close} to="/">
          Home
        </SidenavLink>
        <SidenavLink onClick={close} to="/catalog">
          Catalog
        </SidenavLink>
        <SidenavLink onClick={close} icon={heartIcon} to="/wishlist">
          Wishlist
        </SidenavLink>
        <SearchSidenavLink
          onClick={() => setSearchVisibility(!isSearchVisible)}
          icon={searchIcon}
          as="button"
        >
          Search
        </SearchSidenavLink>
        <Search
          isVisible={isSearchVisible}
          close={close}
          closeSearch={() => setSearchVisibility(false)}
        />
      </SidenavLinksWrapper>
      <SocialMediaWrapper>
        <SocialMedia type="twitter" />
        <SocialMedia type="facebook" />
        <SocialMedia type="instagram" />
      </SocialMediaWrapper>
    </Aside>
  );
};

Sidenav.propTypes = {
  close: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Sidenav;
