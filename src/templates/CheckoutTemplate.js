import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Progress from 'components/organisms/Checkout/Progress';
import CheckoutForm from 'components/organisms/Checkout/Form';
import CartSummary from 'components/organisms/Checkout/CartSummary';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  ${({ theme }) => theme.mq.lg} {
    padding: 80px 0 50px;
  }
`;

const InnerWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mq.md} {
    padding: 50px 0 30px;
  }
  ${({ theme }) => theme.mq.lg} {
    justify-content: space-evenly;
  }
`;

const ProgressWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const CartSummaryWrapper = styled.div`
  display: none;
  width: 100%;
  max-width: 500px;
  margin-left: 30px;
  ${({ theme }) => theme.mq.md} {
    display: block;
  }
`;

const CheckoutTemplate = ({ items }) => {
  return (
    <UserTemplate header={false}>
      <Wrapper>
        <ProgressWrapper>
          <Progress />
        </ProgressWrapper>
        <InnerWrapper>
          <FormWrapper>
            <CheckoutForm />
          </FormWrapper>
          <CartSummaryWrapper>
            <CartSummary cartItems={items} />
          </CartSummaryWrapper>
        </InnerWrapper>
      </Wrapper>
    </UserTemplate>
  );
};

CheckoutTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutTemplate;
