import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoImg from 'assets/images/logo.png';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  z-index: ${({ theme }) => theme.zIndex.level8};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: 0.25s ease;
`;

const Logo = styled.div`
  display: block;
  width: 200px;
  height: 87px;
  background: url(${logoImg}) no-repeat center;
  background-size: 100%;
  will-change: transform;
`;

const PageLoader = ({ isActive }) => (
  <Wrapper isActive={isActive}>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  </Wrapper>
);

PageLoader.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default PageLoader;
