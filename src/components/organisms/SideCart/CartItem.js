import React from 'react';
import styled from 'styled-components';
import defaultImg from 'assets/images/defaultImg.jpg';
import deleteIcon from 'assets/icons/delete.svg';

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

const RemoveBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  display: block;
  background: url(${deleteIcon}) no-repeat center;
  border-radius: 50%;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(500%);
  }
`;

const Name = styled.h3`
  margin: 0 0 8px;
  padding-right: 15px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: 1.5rem;
  line-height: 1.35rem;
`;

const PricesWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  margin-top: 12px;
`;

const TotalPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.medium};
`;

const Price = styled.span`
  margin-left: 7px;
`;

const Detail = styled.div`
  color: ${({ theme }) => theme.gray};
  font-weight: ${({ theme }) => theme.medium};
`;
const QuantityWrapper = styled.div`
  margin-top: auto;
  display: flex;
`;

const Input = styled.input`
  display: inline-block;
  padding: 0 12px;
  font-family: ${({ theme }) => theme.fonts.specialFont2};
  font-size: 35px;
  transition: 0.2s;
  line-height: 35px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;

const MinusInput = styled(Input)`
  border-radius: 5px 0 0 5px;
  border-right: none;
`;

const PlusInput = styled(Input)`
  border-radius: 0 5px 5px 0;
  border-left: none;
`;

const Quantity = styled(Input)`
  padding: 0 20px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.subFont};
`;

const CartItem = () => (
  <Wrapper>
    <ImageWrapper>
      <Image src={defaultImg} />
    </ImageWrapper>
    <Content>
      <RemoveBtn />
      <Name>Nike Hoodie</Name>
      <Detail>Hoodies</Detail>
      <Detail>Size: M</Detail>
      <PricesWrapper>
        <TotalPrice>$180.00</TotalPrice>
        <Price>$90.00</Price>
      </PricesWrapper>
      <QuantityWrapper>
        <MinusInput type="button" value="+" />
        <Quantity as="span">2</Quantity>
        <PlusInput type="button" value="-" />
      </QuantityWrapper>
    </Content>
  </Wrapper>
);

export default CartItem;
