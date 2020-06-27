import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const StyledButton = styled(Button)`
  display: block;
  text-decoration: none;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
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

const Summary = ({ subtotal }) => (
  <SummaryWrapper>
    <SummaryContent>
      <SummaryMain>
        <StyledHeading>Subtotal:</StyledHeading>
        <StyledHeading>${subtotal}</StyledHeading>
      </SummaryMain>
      <StyledButton as={Link} to="/cart" secondary="true">
        View cart
      </StyledButton>
      <Button secondary>Check out</Button>
      <SummaryInfo>Shipping & taxes calculated at check out</SummaryInfo>
    </SummaryContent>
  </SummaryWrapper>
);

Summary.propTypes = {
  subtotal: PropTypes.string.isRequired,
};

export default Summary;
