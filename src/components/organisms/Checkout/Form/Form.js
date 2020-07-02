import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import RadioInputs from 'components/organisms/Checkout/Form/RadioInputs';
import FormInput from 'components/organisms/Checkout/Form/FormInput';
import PropTypes from 'prop-types';
import { updateStore } from 'actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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

const StyledButton = styled(Button)`
  margin: 30px 0;
  height: 56px;
  border-radius: 4px;
  ${({ disabled }) =>
    disabled &&
    css`
      content: '';
      background-color: ${({ theme }) => theme.blue};
      border-color: ${({ theme }) => theme.blue};
      cursor: default;
    `}
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

const CheckoutSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required!'),
  email: Yup.string()
    .email('Email address is invalid!')
    .required('Email address is required!'),
  address: Yup.string().required('Address is required!'),
  postalCode: Yup.string().required('Postal Code is required!'),
  city: Yup.string().required('City is required!'),
});

const CheckoutForm = ({ cartItems }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        address: '',
        postalCode: '',
        city: '',
        payment: 'creditCard',
      }}
      validationSchema={CheckoutSchema}
      onSubmit={(values, { setSubmitting }) => {
        cartItems.map(({ id, size, quantity }) =>
          dispatch(updateStore(id, size, quantity)),
        );
        setTimeout(() => {
          setSubmitting(false);
        }, 3500);
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
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <HeadingWrapper>
            <Heading>Billing details</Heading>
          </HeadingWrapper>
          <FormInput
            id="name"
            label="First & last name"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.name}
            touched={touched.name}
            errors={errors.name}
          />
          <FormInput
            id="email"
            label="Email address"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.email}
            touched={touched.email}
            errors={errors.email}
          />
          <FormInput
            id="address"
            label="Address"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.address}
            touched={touched.address}
            errors={errors.address}
          />
          <InputWrapper>
            <FormInput
              id="postalCode"
              label="Postal Code"
              onChangeFn={handleChange}
              onBlurFn={handleBlur}
              value={values.postalCode}
              touched={touched.postalCode}
              errors={errors.postalCode}
            />
            <FormInput
              id="city"
              label="City"
              onChangeFn={handleChange}
              onBlurFn={handleBlur}
              value={values.city}
              touched={touched.city}
              errors={errors.city}
            />
          </InputWrapper>
          <Heading>Payment method</Heading>
          <RadioInputs
            setField={setFieldValue}
            name="payment"
            value={values.payment}
            options={[
              { id: 'creditCard', label: 'Credit Card' },
              { id: 'paypal', label: 'Paypal' },
              { id: 'bank', label: 'Bank transfer' },
            ]}
          />
          <StyledButton
            submit="true"
            disabled={isSubmitting}
            secondary="true"
            type="submit"
          >
            {!isSubmitting && 'Complete your order'}
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
};

CheckoutForm.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutForm;
