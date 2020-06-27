import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Bar = styled.div`
  position: ${({ mini }) => (mini ? 'absolute' : 'fixed')};
  height: ${({ mini }) => (mini ? '2px' : '4px')};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.level9};
  top: 0;
  background-color: ${({ mini, theme }) => (mini ? theme.blue : theme.blue100)};
  transform-origin: 0 50%;
  transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  transition: ${({ duration }) => `${duration}s`} cubic-bezier(0.1, 0.7, 1, 0.1);
`;

const ProgressBar = ({ isActive, duration, mini }) => (
  <Bar mini={mini} isActive={isActive} duration={duration / 1000} />
);

ProgressBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  mini: PropTypes.bool,
};

ProgressBar.defaultProps = {
  mini: false,
};

export default ProgressBar;
