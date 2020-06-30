import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  display: inline-block;
  padding: 0 12px;
  font-family: ${({ theme }) => theme.fonts.specialFont2};
  font-size: 35px;
  transition: 0.2s;
  line-height: 35px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;

const Quantity = styled(Input)`
  width: 50px;
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.subFont};
  cursor: auto;
  &:hover {
    background-color: transparent;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  margin-top: auto;
  ${({ big }) =>
    big &&
    css`
      & > ${Input} {
        font-size: 45px;
        line-height: 45px;
        padding: 0 20px;
      }
      & > ${Quantity} {
        width: 70px;
        font-size: 22px;
      }
    `}
`;

const MinusInput = styled(Input)`
  border-radius: 5px 0 0 5px;
  border-right: none;
`;

const PlusInput = styled(Input)`
  border-radius: 0 5px 5px 0;
  border-left: none;
`;

const QuantityField = ({ big, value, add, subtract }) => (
  <QuantityWrapper big={big}>
    <MinusInput onClick={add} type="button" value="+" />
    <Quantity as="span">{value}</Quantity>
    <PlusInput onClick={subtract} type="button" value="-" />
  </QuantityWrapper>
);

QuantityField.propTypes = {
  value: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  big: PropTypes.bool,
};

QuantityField.defaultProps = {
  big: false,
};

export default QuantityField;
