import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const SummaryWrapper = styled.div`
  z-index: 1;
  flex: 0 0 auto;
  background-color: ${({ theme }) => theme.white};
  border-top: 1px solid rgba(129, 129, 129, 0.2);
  box-shadow: 0 0 10px 0 rgba(129, 129, 129, 0.2);
  color: ${({ theme }) => theme.dark200};
`;

const SummaryContent = styled.div`
  padding: 20px;
`;

const SummaryMain = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.semiBold};
`;

const CheckoutButton = styled(Button)`
  margin: 0 auto;
  width: 100%;
  text-transform: none;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  padding: 17px 32px !important;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 20px;
  font-size: ${({ theme }) => theme.fontSize.sm} !important;
`;

const SummaryInfo = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Summary = () => (
  <SummaryWrapper>
    <SummaryContent>
      <SummaryMain>
        <StyledHeading>Subtotal:</StyledHeading>
        <StyledHeading>$90.00</StyledHeading>
      </SummaryMain>
      <CheckoutButton>Check out</CheckoutButton>
      <SummaryInfo>Shipping & taxes calculated at check out</SummaryInfo>
    </SummaryContent>
  </SummaryWrapper>
);

export default Summary;
