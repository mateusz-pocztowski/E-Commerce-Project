import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Aside from 'components/molecules/Aside/Aside';

const SideCart = ({ close, isActive }) => (
  <Aside title="Shopping cart" side="right" close={close} isActive={isActive}>
    <div />
  </Aside>
);

SideCart.propTypes = {
  close: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SideCart;
