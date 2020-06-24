import React from 'react';
import styled from 'styled-components';
import cartIcon from 'assets/icons/cart.svg';
// import heartIcon from 'assets/icons/heart.svg';
import Heading from 'components/atoms/Heading/Heading';

const Wrapper = styled.div`
  padding-top: 65px;
  ${({ theme }) => theme.mq.md} {
    padding-top: 85px;
  }
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  padding: 0 15px;
  ${({ theme }) => theme.mq.md} {
    padding: 0 30px;
  }
`;

const HeadingWrapper = styled.div`
  padding: 35px 0;
  box-shadow: 0 -1px #ddd inset;
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.dark};
`;

const EmptyStateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.7;
  text-align: center;
  padding: 0 20px;
  min-height: 50vh;
`;

const EmptyState = styled.div`
  margin: 0 auto;
  width: 90px;
  height: 90px;
  background: url(${cartIcon}) no-repeat center;
  background-size: 100%;
  filter: invert(1);
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 5px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.gray};
`;

const UserTemplate = () => (
  <Wrapper>
    <HeadingWrapper>
      <InnerWrapper>
        <Title>Cart</Title>
      </InnerWrapper>
    </HeadingWrapper>
    <InnerWrapper>
      <EmptyStateWrapper>
        <EmptyState />
        <StyledHeading>Your cart is empty.</StyledHeading>
        <Paragraph>You don&apos;t have any products in the cart yet.</Paragraph>
      </EmptyStateWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default UserTemplate;
