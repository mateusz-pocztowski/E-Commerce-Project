import React, { useContext } from 'react';
import styled from 'styled-components';
import cartIcon from 'assets/icons/cart.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import Heading from 'components/atoms/Heading/Heading';
import { PageContext } from 'context/PageContext';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.7;
  text-align: center;
  padding: 0 20px;
  min-height: 60vh;
`;

const Icon = styled.div`
  margin: 0 auto;
  width: 90px;
  height: 90px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  filter: invert(1);
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 5px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.gray};
`;

const EmptyState = () => {
  const page = useContext(PageContext);
  return (
    <Wrapper>
      <Icon icon={page === 'wishlist' ? heartIcon : cartIcon} />
      <StyledHeading>
        {page === 'catalog' ? 'No products found' : `Your ${page} is empty.`}
      </StyledHeading>
      {page !== 'catalog' && (
        <Paragraph>
          You don&apos;t have any products in the {page} yet.
        </Paragraph>
      )}
    </Wrapper>
  );
};

export default EmptyState;
