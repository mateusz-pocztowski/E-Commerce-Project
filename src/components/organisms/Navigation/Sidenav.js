import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import searchIcon from 'assets/icons/search.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import Aside from 'components/molecules/Aside/Aside';
import Button from 'components/atoms/Button/Button';
import { setSearchValue as setSearchValueAction } from 'actions';

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

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.3s;
  opacity: ${({ active }) => (active ? '1' : '0')};
`;

const SearchInput = styled.input`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  padding: 10px 18px;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  margin: 0;
  padding: 10px !important;
  font-size: ${({ theme }) => theme.fontSize.xsm} !important;
  font-weight: ${({ theme }) => theme.medium};
`;

const SocialMediaWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  border-top: 1px solid rgba(129, 129, 129, 0.2);
`;

const Sidenav = ({ close, isActive }) => {
  const [isSearchInputVisible, setSearchInputVisibility] = useState(false);
  const [isRedirect, setRedirect] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const toggleSearchVisibility = () => {
    if (!isSearchInputVisible) searchRef.current.focus();
    else searchRef.current.blur();
    setSearchInputVisibility(!isSearchInputVisible);
  };

  const searchSubmit = () => {
    dispatch(setSearchValueAction(searchValue));
    setRedirect(true);
    close();
  };

  return (
    <>
      {isRedirect && <Redirect to="/catalog" />}
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
            onClick={toggleSearchVisibility}
            icon={searchIcon}
            as="button"
          >
            Search
          </SearchSidenavLink>
          <SearchWrapper active={isSearchInputVisible}>
            <SearchInput
              onChange={e => handleInputChange(e)}
              placeholder="Search..."
              value={searchValue}
              ref={searchRef}
            />
            <StyledButton type="submit" onClick={searchSubmit} secondary>
              Submit
            </StyledButton>
          </SearchWrapper>
        </SidenavLinksWrapper>
        <SocialMediaWrapper>
          <SocialMedia type="twitter" />
          <SocialMedia type="facebook" />
          <SocialMedia type="instagram" />
        </SocialMediaWrapper>
      </Aside>
    </>
  );
};

Sidenav.propTypes = {
  close: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Sidenav;
