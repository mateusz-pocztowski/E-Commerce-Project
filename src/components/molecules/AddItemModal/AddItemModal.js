import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { Formik } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveBtn from 'components/atoms/RemoveBtn/RemoveBtn';
import Button from 'components/atoms/Button/Button';
import QuantityField from 'components/molecules/QuantityField/QuantityField';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from 'actions';
import { defaultStyle, errorStyle } from './SelectCustom';
import './modalStyle.css';

Modal.setAppElement(document.getElementById('root'));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.dark300};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 25px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  width: 90px;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px 0 8px;
`;

const Name = styled.h3`
  margin: 0 0 5px;
  padding-right: 15px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Price = styled.span`
  color: ${({ theme }) => theme.gray100};
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.xsm};
`;

const QuantityFieldWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.dark};
`;

const ErrorMsg = styled.div`
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  position: absolute;
  bottom: -27px;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.dark300};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.white};
  transition: 0.2s;
`;

const AddItemModal = ({ isActive, itemID, close }) => {
  const [isModalOpen, setModalOpen] = useState(isActive);
  const dispatch = useDispatch();

  const itemData = useSelector(({ products }) =>
    products.find(({ id }) => id === itemID),
  );

  const { image, name, price, size } = itemData;

  const sizeOptions = size.map(({ value, limit }) => ({
    value,
    label: value.toUpperCase(),
    limit,
  }));

  const handleModalClose = () => {
    setModalOpen(false);
    setTimeout(close, 300);
  };

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
    >
      <Wrapper>
        <ItemWrapper>
          <RemoveBtn onClick={handleModalClose} />
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
          <Content>
            <Name>{name}</Name>
            <Price>${price}</Price>
          </Content>
        </ItemWrapper>
        <Formik
          initialValues={{ itemSize: '', quantity: 1 }}
          validate={({ itemSize, quantity }) => {
            const errors = {};
            if (!itemSize) {
              errors.itemSize = 'You need to select size!';
            }
            if (
              size.some(
                ({ value, limit }) => value === itemSize && quantity > limit,
              )
            ) {
              errors.quantity = true;
            }
            return errors;
          }}
          onSubmit={({ itemSize, quantity }) => {
            const newItem = {
              ...itemData,
              size: itemSize,
              quantity,
            };
            dispatch(addItem(newItem, 'cart'));
          }}
        >
          {({
            values,
            touched,
            errors,
            setFieldTouched,
            setFieldValue,
            handleSubmit,
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Select
                placeholder={
                  (errors.itemSize && touched.itemSize && errors.itemSize) ||
                  'Size'
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
              <QuantityFieldWrapper>
                <QuantityField
                  name="quantity"
                  subtract={() =>
                    values.quantity > 1 &&
                    setFieldValue('quantity', values.quantity - 1)
                  }
                  add={() =>
                    !errors.quantity &&
                    setFieldValue('quantity', values.quantity + 1)
                  }
                  value={values.quantity}
                />
                <ErrorMsg active={errors.quantity}>
                  Product limit reacted!
                </ErrorMsg>
              </QuantityFieldWrapper>
              <div>
                <Button secondary type="submit">
                  Add to cart
                </Button>
                <StyledButton secondary>View full details</StyledButton>
              </div>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    </Modal>
  );
};

AddItemModal.propTypes = {
  itemID: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default AddItemModal;
