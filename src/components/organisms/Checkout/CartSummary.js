import React from 'react';
import bagIcon from 'assets/icons/cart.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 82px;
  border: 2px solid ${({ theme }) => theme.white200};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
  border-radius: 4px;
`;

const InnerWrapper = styled.div`
  padding: 12px 25px;
`;

const Heading = styled.h2`
  margin: 10px 0;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  display: block;
  width: 22px;
  height: 22px;
  background: url(${bagIcon}) no-repeat center;
  background-size: 100%;
  margin-right: 8px;
  filter: invert(1);
`;

const ItemWrapper = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid #ddd;
  font-weight: ${({ theme }) => theme.medium};
  :nth-last-of-type(1) {
    border: none;
  }
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  margin: 6px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.span`
  color: ${({ theme }) => theme.gray100};
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSize.xsm};
`;

const SubtotalWrapper = styled.div`
  border-top: 1px solid #ddd;
`;

const TotalPrice = styled.div`
  padding: 20px 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.medium};
`;

const Bold = styled.b`
  font-weight: ${({ theme }) => theme.semiBold};
`;

const CartSummary = ({ cartItems }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Heading>
          <Icon />
          Cart Summary
        </Heading>
        {cartItems.map(({ name, quantity, size, category, price }) => (
          <ItemWrapper key={name + size}>
            <ItemContent>
              <Name>{`${quantity} × ${name}`}</Name>
              <Name>${price}</Name>
            </ItemContent>
            <DetailsWrapper>
              <Detail>Size: {size.toUpperCase()}</Detail>
              <Detail>Category: {category}</Detail>
            </DetailsWrapper>
          </ItemWrapper>
        ))}
      </InnerWrapper>
      <SubtotalWrapper>
        <TotalPrice>
          Subtotal:
          <Bold>
            $
            {cartItems
              .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
              .toFixed(2)}
          </Bold>
        </TotalPrice>
      </SubtotalWrapper>
    </Wrapper>
  );
};

CartSummary.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartSummary;
