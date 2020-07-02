import React from 'react';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import checkIcon from 'assets/icons/checkmark.svg';
import Button from 'components/atoms/Button/Button';
import { Formik, Form } from 'formik';

const HeadingWrapper = styled.div`
  margin: 0 0 60px 0;
`;

const Heading = styled.h3`
  margin: 0 0 15px 10px;
  color: ${({ theme }) => theme.dark};
  font-family: ${({ theme }) => theme.fonts.subFont2};
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const InputItem = styled.div`
  width: 100%;
  margin: 10px 0 45px;
  position: relative;
`;

const RadioInputItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
      color: red;
    `}
`;

const StyledInput = styled(Input)`
  width: 100%;
  border: 2px solid;
  border-color: ${({ theme, border }) => border || theme.white200};
  border-radius: 4px;
  padding-left: 15px;
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    color: ${({ theme }) => theme.dark};
  }
  ${({ border }) =>
    !border &&
    css`
      &:focus + ${Label} {
        color: ${({ theme }) => theme.dark};
      }
    `}
`;

const StyledButton = styled(Button)`
  margin: 30px 0;
  border-radius: 4px;
`;

const InputWrapper = styled.div`
  display: flex;
  & div:first-child {
    margin-right: 10px;
  }
  ${({ theme }) => theme.mq.sm} {
    & div:first-child {
      flex-basis: 55%;
    }
  }
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

const CheckoutForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <HeadingWrapper>
            <Heading>Billing details</Heading>
          </HeadingWrapper>
          <InputItem>
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              border={touched.name && errors.name && 'rgba(255, 0, 51, 0.4)'}
            />
            <Label htmlFor="name" isInvalid={touched.name && errors.name}>
              {(errors.name && touched.name && errors.name) ||
                'First & last name'}
            </Label>
          </InputItem>
          <InputItem>
            <StyledInput
              type="text"
              id="email"
              name="email"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              border={touched.email && errors.email && 'rgba(255, 0, 51, 0.4)'}
            />
            <Label htmlFor="email" isInvalid={touched.email && errors.email}>
              {(errors.email && touched.email && errors.email) ||
                'Email address'}
            </Label>
          </InputItem>
          <InputItem>
            <StyledInput
              type="text"
              id="address"
              name="address"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              border={
                touched.address && errors.address && 'rgba(255, 0, 51, 0.4)'
              }
            />
            <Label
              htmlFor="address"
              isInvalid={touched.address && errors.address}
            >
              {(errors.address && touched.address && errors.address) ||
                'Address'}
            </Label>
          </InputItem>
          <InputWrapper>
            <InputItem>
              <StyledInput
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
                border={
                  touched.postalCode &&
                  errors.postalCode &&
                  'rgba(255, 0, 51, 0.4)'
                }
              />
              <Label
                htmlFor="postalCode"
                isInvalid={touched.postalCode && errors.postalCode}
              >
                {(errors.postalCode &&
                  touched.postalCode &&
                  errors.postalCode) ||
                  'Postal Code'}
              </Label>
            </InputItem>
            <InputItem>
              <StyledInput
                type="text"
                id="city"
                name="city"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                border={touched.city && errors.city && 'rgba(255, 0, 51, 0.4)'}
              />
              <Label htmlFor="city" isInvalid={touched.city && errors.city}>
                {(errors.city && touched.city && errors.city) || 'City'}
              </Label>
            </InputItem>
          </InputWrapper>
          <Heading>Payment method</Heading>
          <RadioInputItems>
            <RadioInput>
              <Radio
                id="creditCard"
                name="payment"
                type="radio"
                value="creditCard"
                checked={values.payment === 'creditCard'}
                onChange={() => setFieldValue('payment', 'creditCard')}
              />
              <RadioLabel htmlFor="creditCard">Credit Card</RadioLabel>
            </RadioInput>
            <RadioInput>
              <Radio
                id="paypal"
                type="radio"
                name="payment"
                value="paypal"
                checked={values.payment === 'paypal'}
                onChange={() => setFieldValue('payment', 'paypal')}
              />
              <RadioLabel htmlFor="paypal">Paypal</RadioLabel>
            </RadioInput>
            <RadioInput>
              <Radio
                id="bank"
                type="radio"
                name="payment"
                value="bank"
                checked={values.payment === 'bank'}
                onChange={() => setFieldValue('payment', 'bank')}
              />
              <RadioLabel htmlFor="bank">Bank transfer</RadioLabel>
            </RadioInput>
          </RadioInputItems>
          <StyledButton secondary type="submit">
            Complete your order
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
