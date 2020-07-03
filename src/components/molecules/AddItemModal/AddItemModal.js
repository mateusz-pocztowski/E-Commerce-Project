import React, { useState } from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveBtn from 'components/atoms/RemoveBtn/RemoveBtn';
import { useSelector } from 'react-redux';
import AddForm from 'components/molecules/AddItemModal/AddForm';
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

const AddItemModal = ({ isActive, itemID, close }) => {
  const [isModalOpen, setModalOpen] = useState(isActive);
  const [isRedirect, setRedirect] = useState(false);

  const allContainers = useSelector(({ products, wishlist, featured }) => [
    ...products,
    ...wishlist,
    ...featured,
  ]);

  const itemData = allContainers.find(({ id }) => id === itemID);

  const { image, name, price } = itemData;

  const handleModalClose = () => {
    setModalOpen(false);
    setTimeout(close, 300);
  };

  return (
    <>
      {isRedirect && <Redirect to={`/catalog/${itemID}`} />}
      <Modal
        closeTimeoutMS={300}
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
      >
        <Wrapper>
          <ItemWrapper>
            <RemoveBtn onClick={handleModalClose} />
            <ImageWrapper>
              <Image src={image} alt={name} />
            </ImageWrapper>
            <Content>
              <Name>{name}</Name>
              <Price>${price}</Price>
            </Content>
          </ItemWrapper>
          <AddForm
            isModal
            itemData={itemData}
            redirect={() => setRedirect(true)}
            onFinishFunc={handleModalClose}
          />
        </Wrapper>
      </Modal>
    </>
  );
};

AddItemModal.propTypes = {
  itemID: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default AddItemModal;
