import React from 'react';
import Input from 'components/atoms/Input/Input';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const InputItem = styled.div`
  width: 100%;
  margin: 10px 0 45px;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: -25px;
  left: 10px;
  transition: 0.2s ease-out all;
  color: ${({ theme }) => theme.gray100};
  font-family: ${({ theme }) => theme.fonts.subFont2};
  font-weight: ${({ theme }) => theme.medium};
  cursor: auto;
  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: ${({ theme }) => theme.red};
    `}
`;

const StyledInput = styled(Input)`
  width: 100%;
  border: 2px solid;
  border-color: ${({ theme }) => theme.white200};
  border-radius: 4px;
  padding-left: 15px;
  &:focus + ${Label} {
    color: ${({ theme }) => theme.dark};
  }
  ${({ valid }) =>
    valid &&
    css`
      border-color: ${({ theme }) => theme.green100};
    `}
  ${({ invalid }) =>
    invalid &&
    css`
      border-color: ${({ theme }) => theme.red100};
    `}
`;

const FormInput = ({
  id,
  onChangeFn,
  onBlurFn,
  value,
  touched,
  errors,
  label,
}) => (
  <InputItem>
    <StyledInput
      type="text"
      id={id}
      name={id}
      placeholder=" "
      onChange={onChangeFn}
      onBlur={onBlurFn}
      value={value}
      invalid={touched && errors}
      valid={touched && !errors}
    />
    <Label htmlFor={id} isInvalid={touched && errors}>
      {(errors && touched && errors) || label}
    </Label>
  </InputItem>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeFn: PropTypes.func.isRequired,
  onBlurFn: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

FormInput.defaultProps = {
  touched: false,
  errors: null,
};

export default FormInput;
