import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
`;

const Summary = styled.div`
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.dark300};
  margin: 0 0 14px;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.sm} !important;
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mq.sm} {
    display: block;
  }
`;

const Detail = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const FullCartSummary = ({ subtotal }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button as={Link} to="/catalog" secondary>
          Continue shopping
        </Button>
      </ButtonWrapper>
      <Summary>
        <Total>
          <StyledHeading>Subtotal:</StyledHeading>
          <StyledHeading>${subtotal}</StyledHeading>
        </Total>
        <Total>
          <Detail>Shipping:</Detail>
          <Detail>Free</Detail>
        </Total>
        <StyledButton as={Link} to="/checkout" secondary>
          Check out
        </StyledButton>
      </Summary>
    </Wrapper>
  );
};

FullCartSummary.propTypes = {
  subtotal: PropTypes.string.isRequired,
};

export default FullCartSummary;
