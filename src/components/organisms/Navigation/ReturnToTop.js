import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrowIcon from 'assets/icons/arrow-up.svg';
import { animateScroll as scroll } from 'react-scroll';

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.white100};
  z-index: ${({ theme }) => theme.zIndex.level9};
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  ${({ theme }) => theme.mq.lg} {
    bottom: 40px;
    right: 40px;
  }
`;

const Icon = styled.i`
  display: block;
  width: 18px;
  height: 18px;
  background: url(${arrowIcon}) no-repeat center;
  background-size: 100%;
`;

const ReturnToTop = ({ isVisible }) => (
  <Wrapper isVisible={isVisible} onClick={() => scroll.scrollToTop()}>
    <Icon />
  </Wrapper>
);

ReturnToTop.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default ReturnToTop;
