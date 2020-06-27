import React from 'react';
import styled from 'styled-components';
import defaultImg from 'assets/images/defaultImg.jpg';
import RemoveBtn from 'components/atoms/RemoveBtn/RemoveBtn';
import QuantityField from 'components/molecules/QuantityField/QuantityField';

const Wrapper = styled.div`
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

const ImageWrapper = styled.div`
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
  position: relative;
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

const CartItem = () => (
  <Wrapper>
    <ImageWrapper>
      <Image src={defaultImg} />
    </ImageWrapper>
    <Content>
      <RemoveBtn />
      <Name>Nike Hoodie Sportswear</Name>
      <Size>Size: M</Size>
      <PricesWrapper>
        <Price>1 × </Price>
        <TotalPrice> $90.00</TotalPrice>
      </PricesWrapper>
      <QuantityField />
    </Content>
  </Wrapper>
);

export default CartItem;
