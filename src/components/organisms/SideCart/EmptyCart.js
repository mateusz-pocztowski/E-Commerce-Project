import React from 'react';
import styled from 'styled-components';
import emptyCartImg from 'assets/images/empty-cart.png';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const EmptyCartWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EmptyCartImage = styled.img`
  display: block;
  width: 100%;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  padding: 17px 32px !important;
`;

const EmptyCart = ({ closeCart }) => (
  <EmptyCartWrapper>
    <EmptyCartImage src={emptyCartImg} alt="Empty Cart" />
    <StyledButton onClick={closeCart}>Continue Shopping</StyledButton>
  </EmptyCartWrapper>
);

EmptyCart.propTypes = {
  closeCart: PropTypes.func.isRequired,
};

export default EmptyCart;
