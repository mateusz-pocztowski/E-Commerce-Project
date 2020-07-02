import React from 'react';
import styled from 'styled-components';
import defaultImg from 'assets/images/defaultImg.jpg';
import { Link } from 'react-router-dom';
import RemoveBtn from 'components/atoms/RemoveBtn/RemoveBtn';
import PropTypes from 'prop-types';
import QuantityField from 'components/molecules/QuantityField/QuantityField';
import ErrorMsg from 'components/atoms/ErrorMsg/ErrorMsg';
import useCart from 'hooks/useCart';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.fonts.subFont2};
  color: ${({ theme }) => theme.dark300};
  height: 165px;
`;

const QuantityWrapper = styled.div`
  margin-top: auto;
  position: relative;
`;

const StyledRemoveBtn = styled(RemoveBtn)`
  top: 10px;
  right: 10px;
`;

const ImageWrapper = styled(Link)`
  flex-basis: 31%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  width: 120px;
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin: 5px 0 6px;
  padding-right: 15px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const PricesWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  margin-top: 5px;
`;

const TotalPrice = styled.span`
  font-weight: ${({ theme }) => theme.medium};
  margin-left: 5px;
`;

const Price = styled.span`
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.gray100};
`;

const Size = styled.span`
  margin: 0 0 5px;
  color: ${({ theme }) => theme.gray100};
`;

const CartItem = ({ item }) => {
  const [isErrorVisible, { removeItem, handleAdd, handleSubtract }] = useCart(
    item,
  );

  const { id, name, image, size, price, quantity, alt } = item;
  return (
    <Wrapper>
      <StyledRemoveBtn onClick={removeItem} />
      <ImageWrapper to={`/catalog/${id}`}>
        <Image src={image || defaultImg} alt={alt} />
      </ImageWrapper>
      <Content>
        <Name>{name}</Name>
        <Size>Size: {size.toUpperCase()}</Size>
        <PricesWrapper>
          <Price>{quantity} × </Price>
          <TotalPrice> ${price}</TotalPrice>
        </PricesWrapper>
        <QuantityWrapper>
          <QuantityField
            add={handleAdd}
            subtract={handleSubtract}
            value={quantity}
          />
          <ErrorMsg active={isErrorVisible}>Product limit reached!</ErrorMsg>
        </QuantityWrapper>
      </Content>
    </Wrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.string,
    alt: PropTypes.string,
    quantity: PropTypes.number,
    limit: PropTypes.number,
    name: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
};

export default CartItem;
