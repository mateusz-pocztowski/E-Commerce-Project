import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: none;
  ${({ theme }) => theme.mq.lg} {
    display: flex;
    width: 100%;
    padding: 0 0 8px;
    border-bottom: 1px solid #ddd;
  }
`;

const MainLabel = styled.div`
  flex-basis: 50%;
`;

const Label = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-family: ${({ theme }) => theme.subFont};
  font-weight: ${({ theme }) => theme.semiBold};
`;

const SectionLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  :nth-child(2) > * {
    margin: 0 30px;
  }
`;

const FullCartHeader = () => (
  <Header>
    <MainLabel>
      <Label>Product</Label>
    </MainLabel>
    <SectionLabel>
      <Label>Price</Label>
      <Label>Quantity</Label>
      <Label>Total</Label>
    </SectionLabel>
  </Header>
);

export default FullCartHeader;
