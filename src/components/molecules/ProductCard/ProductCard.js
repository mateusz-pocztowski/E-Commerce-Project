import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import cartIcon from 'assets/icons/small-cart.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import defaultImg from 'assets/images/defaultImg.jpg';
import { addItem } from 'actions';
import AddItemModal from 'components/molecules/AddItemModal/AddItemModal';

const Wrapper = styled.div`
  position: relative;
  font-weight: ${({ theme }) => theme.medium};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  transition: transform 0.7s;
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonContent = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: 0.2s;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 5px 0;
  padding: 10px;
  width: 150px;
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  opacity: 0;
  z-index: 2;
  overflow: hidden;
  transform: translateY(-100%);
  transition: all 0.2s;
  &:before {
    content: url(${({ icon }) => icon});
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -100%;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: ${({ invert }) => invert && 'invert(1)'};
  }
  &:hover {
    background-color: #222222;
    transition: 0.3s;
  }
  &:hover:before {
    transform: translateY(-100%);
  }
  &:hover ${ButtonContent} {
    transform: translateY(-150%);
    opacity: 0;
    color: ${({ theme }) => theme.white};
  }
`;

const Overlay = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: 0.5s;
  }
  &:hover:before {
    background: rgba(0, 0, 0, 0.1);
  }
  &:hover > ${Image} {
    transform: scale3d(1.1, 1.1, 1);
  }
  &:hover > ${OptionsWrapper} ${Button} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Description = styled.div`
  padding: 13px 0;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  ${({ theme }) => theme.mq.lg} {
    font-size: 1.5rem;
  }
`;

const Name = styled.h3`
  margin: 5px 0;
  font-weight: ${({ theme }) => theme.medium};
`;

const Price = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.gray};
  font-family: ${({ theme }) => theme.fonts.subFont};
`;

const ProductCard = ({ id, img, price, name }) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {isModalVisible && (
        <AddItemModal
          itemID={id}
          isActive={isModalVisible}
          close={() => setModalVisibility(false)}
        />
      )}
      <Wrapper>
        <Overlay>
          <Image src={img} />
          <OptionsWrapper>
            <Options>
              <Button
                onClick={() => setModalVisibility(true)}
                icon={cartIcon}
                invert
              >
                <ButtonContent>Add to Cart</ButtonContent>
              </Button>
              <Button
                icon={heartIcon}
                onClick={() => dispatch(addItem(id, 'wishlist'))}
              >
                <ButtonContent>Wishlist</ButtonContent>
              </Button>
            </Options>
          </OptionsWrapper>
        </Overlay>
        <Description>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </Description>
      </Wrapper>
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

ProductCard.defaultProps = {
  img: defaultImg,
};

export default ProductCard;
