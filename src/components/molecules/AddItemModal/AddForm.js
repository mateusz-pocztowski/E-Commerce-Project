import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ErrorMsg from 'components/atoms/ErrorMsg/ErrorMsg';
import heartIcon from 'assets/icons/heart.svg';
import PropTypes from 'prop-types';
import QuantityField from 'components/molecules/QuantityField/QuantityField';
import Button from 'components/atoms/Button/Button';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { addItem, removeWishlistItem } from 'actions';
import { defaultStyle, errorStyle } from './SelectCustom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  & > * {
    margin-top: 25px;
  }
`;

const QuantityFieldWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${({ isCentered }) => (isCentered ? 'center' : 'stretch')};
  flex-direction: column;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.dark};
`;

const SubmitButton = styled(Button)`
  border-radius: ${({ isRound }) => (isRound ? '50px' : '4px')};
`;

const InnerWrapper = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}
`;

const WishlistButton = styled.button`
  background-color: ${({ theme }) => theme.white};
  background: url(${heartIcon}) no-repeat center;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-size: 50%;
  margin: 10px;
  padding: 0 28px;
  cursor: pointer;
  transition: 0.35s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(111, 179, 235, 0.8);
  }
  ${({ inWishlist }) =>
    inWishlist &&
    css`
      background-color: ${({ theme }) => theme.white100};
      box-shadow: 0 0 8px 0 rgba(111, 179, 235, 0.4);
    `}
`;

const AddForm = ({ redirect, isModal, itemData, onFinishFunc }) => {
  const [isErrorVisible, setErrorVisibility] = useState(false);

  const { id, image, price, name, size } = itemData;
  const sizeOptions = size.map(({ value, limit }) => ({
    value,
    label: value.toUpperCase(),
    limit,
  }));

  const dispatch = useDispatch();
  const wishlistItems = useSelector(({ wishlist }) => wishlist);

  const isInWishlist = productID => {
    return wishlistItems.some(item => productID === item.id);
  };

  const handleWishlist = productID => {
    if (isInWishlist(productID)) {
      dispatch(removeWishlistItem(productID, 'wishlist'));
    } else {
      const newWishlistItem = { id, image, price, name };
      dispatch(addItem(newWishlistItem, 'wishlist'));
    }
  };

  return (
    <Formik
      initialValues={{ itemSize: '', quantity: 1 }}
      validate={({ itemSize, quantity }) => {
        const errors = {};
        if (!itemSize) {
          errors.itemSize = 'You need to select size!';
        }
        if (
          size.some(
            ({ value, limit }) => value === itemSize && quantity >= limit,
          )
        ) {
          setErrorVisibility(true);
          setTimeout(() => setErrorVisibility(false), 1500);
        }
        return errors;
      }}
      onSubmit={({ itemSize, quantity }, { setSubmitting }) => {
        const { limit } = sizeOptions.find(({ value }) => value === itemSize);
        const newItem = {
          ...itemData,
          size: itemSize,
          limit,
          quantity,
        };
        dispatch(addItem(newItem, 'cart'));
        setTimeout(() => {
          onFinishFunc();
          setSubmitting(false);
        }, 1500);
      }}
    >
      {({
        values,
        touched,
        errors,
        setFieldTouched,
        setFieldValue,
        handleSubmit,
        isSubmitting,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Select
            placeholder={
              (errors.itemSize && touched.itemSize && errors.itemSize) || 'Size'
            }
            styles={
              errors.itemSize && touched.itemSize && errors.itemSize
                ? errorStyle
                : defaultStyle
            }
            name="itemSize"
            options={sizeOptions}
            isOptionDisabled={option => option.limit === 0}
            onChange={option => {
              setFieldValue('itemSize', option.value);
              setFieldValue('quantity', 1);
              setFieldTouched('itemSize', false);
            }}
            onBlur={() => setFieldTouched('itemSize', true)}
            isSearchable={false}
          />
          <QuantityFieldWrapper isCentered={isModal}>
            <QuantityField
              name="quantity"
              big
              subtract={() =>
                values.quantity > 1 &&
                setFieldValue('quantity', values.quantity - 1)
              }
              add={() =>
                sizeOptions.some(
                  ({ value, limit }) =>
                    value === values.itemSize && limit > values.quantity,
                ) && setFieldValue('quantity', values.quantity + 1)
              }
              value={values.quantity}
            />
            <ErrorMsg active={isErrorVisible}>Product limit reached!</ErrorMsg>
          </QuantityFieldWrapper>
          <InnerWrapper flex={!isModal}>
            <SubmitButton
              isRound={isModal}
              disabled={isSubmitting}
              secondary
              type="submit"
            >
              Add to cart
            </SubmitButton>
            {isModal ? (
              <StyledButton
                type="button"
                onClick={redirect}
                disabled={isSubmitting}
                secondary
              >
                View full details
              </StyledButton>
            ) : (
              <WishlistButton
                type="button"
                inWishlist={isInWishlist(id)}
                onClick={() => handleWishlist(id)}
              />
            )}
          </InnerWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

AddForm.propTypes = {
  itemData: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  redirect: PropTypes.func,
  onFinishFunc: PropTypes.func.isRequired,
  isModal: PropTypes.bool,
};

AddForm.defaultProps = {
  isModal: false,
  redirect: null,
};

export default AddForm;
