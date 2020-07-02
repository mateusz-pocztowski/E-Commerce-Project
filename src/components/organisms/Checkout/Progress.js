import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import formIcon from 'assets/icons/form.svg';
import cartIcon from 'assets/icons/cart.svg';
import boxIcon from 'assets/icons/shipping.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mq.sm} {
    justify-content: space-between;
  }
`;

const ElementWrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
  ${({ theme }) => theme.mq.sm} {
    display: flex;
  }
`;

const Element = styled.div`
  width: 70px;
  height: 70px;
  background: url(${({ icon }) => icon}) center no-repeat;
  background-size: 45%;
  border-radius: 50%;
  background-color: ${({ theme, active }) =>
    active ? theme.blue : theme.dark200};
`;

const ElementName = styled.span`
  display: block;
  margin: 12px 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.dark300};
`;

const LineWrapper = styled.div`
  display: none;
  position: relative;
  width: 80px;
  ${({ theme }) => theme.mq.sm} {
    display: flex;
  }
  ${({ theme }) => theme.mq.md} {
    width: 150px;
  }
`;

const LineInnerWrapper = styled.div`
  position: absolute;
  top: 25px;
  width: 100%;
`;

const Line = styled.hr`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  &:after {
    position: absolute;
    right: -10px;
    top: -9px;
    content: '>';
    color: #ddd;
  }
`;

const Progress = () => (
  <Wrapper>
    <ElementWrapper>
      <Element as={Link} to="/cart" icon={cartIcon} />
      <ElementName>Your cart</ElementName>
    </ElementWrapper>
    <LineWrapper>
      <LineInnerWrapper>
        <Line />
      </LineInnerWrapper>
    </LineWrapper>
    <ElementWrapper active>
      <Element active icon={formIcon} />
      <ElementName>Checkout</ElementName>
    </ElementWrapper>
    <LineWrapper>
      <LineInnerWrapper>
        <Line />
      </LineInnerWrapper>
    </LineWrapper>
    <ElementWrapper>
      <Element icon={boxIcon} />
      <ElementName>Order complete</ElementName>
    </ElementWrapper>
  </Wrapper>
);

export default Progress;
