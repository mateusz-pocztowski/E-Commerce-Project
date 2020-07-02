import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { setSearchValue as setSearchValueAction } from 'actions';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.3s;
  opacity: ${({ active }) => (active ? '1' : '0')};
  background-color: transparent;
  ${({ isTopnav }) =>
    isTopnav &&
    css`
      position: absolute;
      right: -100px;
      bottom: -70px;
      transform: ${({ active }) =>
        active ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.8)'};
      visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    `}
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  border: ${({ isTopnav, theme }) =>
    isTopnav ? `3px solid ${theme.blue50}` : 'none'};
  border-radius: 4px;
  &:before {
    display: ${({ isTopnav }) => (isTopnav ? 'block' : 'none')};
    content: '';
    cursor: default;
    position: absolute;
    right: 110px;
    top: -16px;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 14px solid ${({ theme }) => theme.blue50};
  }
`;

const SearchInput = styled.input`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  padding: 11px 18px;
  border-bottom: ${({ isTopnav }) =>
    !isTopnav && '1px solid rgba(129, 129, 129, 0.2);'};
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  margin: 0;
  padding: 11px !important;
  font-size: ${({ theme }) => theme.fontSize.xsm} !important;
  font-weight: ${({ theme }) => theme.medium};
  ${({ isTopnav }) =>
    isTopnav &&
    css`
      padding: 15px !important;
    `}
`;

const Search = ({ close, isVisible, closeSearch, topnav }) => {
  const [isRedirect, setRedirect] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const cleanup = () => {
    setSearchValue('');
    closeSearch();
    if (close) close();
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setSearchValueAction(searchValue));
    setRedirect(true);
    cleanup();
  };

  useEffect(() => {
    if (isVisible) searchRef.current.focus();
    else searchRef.current.blur();

    setRedirect(false);
  }, [isRedirect, isVisible]);

  return (
    <>
      {isRedirect && <Redirect to="/catalog" />}
      <SearchWrapper
        isTopnav={topnav}
        onSubmit={handleSubmit}
        active={isVisible}
      >
        <InnerWrapper isTopnav={topnav}>
          <SearchInput
            onChange={e => handleInputChange(e)}
            placeholder="Search..."
            value={searchValue}
            ref={searchRef}
            isTopnav={topnav}
          />
          <StyledButton isTopnav={topnav} type="submit" secondary="true">
            Submit
          </StyledButton>
        </InnerWrapper>
      </SearchWrapper>
    </>
  );
};

Search.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
  topnav: PropTypes.bool,
  close: PropTypes.func,
};

Search.defaultProps = {
  close: null,
  topnav: false,
};

export default Search;
