import React from 'react';
import styled from 'styled-components';
import checkIcon from 'assets/icons/checkmark.svg';
import PropTypes from 'prop-types';

const RadioInputItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RadioInput = styled.div`
  background-color: ${({ theme }) => theme.white};
  display: block;
  margin: 10px 0;
  position: relative;
`;

const RadioLabel = styled.label`
  display: block;
  padding: 20px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.white200};
  color: ${({ theme }) => theme.gray100};
  font-family: ${({ theme }) => theme.fonts.subFont2};
  font-weight: ${({ theme }) => theme.medium};
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  z-index: 2;
  transition: 0.2s ease;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.2s ease;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.blue};
    opacity: 0;
    z-index: -1;
  }

  &:after {
    width: 32px;
    height: 32px;
    content: '';
    border: 2px solid ${({ theme }) => theme.white200};
    background-color: ${({ theme }) => theme.white};
    background: url(${checkIcon}) no-repeat center;
    background-size: 65%;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }
`;

const Radio = styled.input`
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
  &:checked ~ ${RadioLabel} {
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.blue};
    &:before {
      opacity: 1;
    }
    &:after {
      background-color: ${({ theme }) => theme.green};
      border-color: ${({ theme }) => theme.green};
    }
  }
`;

const RadioInputs = ({ setField, name, value, options }) => (
  <RadioInputItems>
    {options.map(({ id, label }) => (
      <RadioInput key={id}>
        <Radio
          id={id}
          name={name}
          type="radio"
          value={id}
          checked={value === id}
          onChange={() => setField(name, id)}
        />
        <RadioLabel htmlFor={id}>{label}</RadioLabel>
      </RadioInput>
    ))}
  </RadioInputItems>
);

RadioInputs.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RadioInputs;
