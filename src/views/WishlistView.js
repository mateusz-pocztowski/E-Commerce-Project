import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import UserTemplate from 'templates/UserTemplate';
import { useSelector } from 'react-redux';
import EmptyState from 'components/molecules/EmptyState/EmptyState';
import TransitionTemplate from 'templates/TransitionTemplate';

const Wrapper = styled.main`
  padding: 30px 0 50px;
`;

const WishlistView = () => {
  const wishlistItems = useSelector(({ wishlist }) => wishlist);

  return (
    <TransitionTemplate transition={1}>
      <UserTemplate>
        {wishlistItems.length === 0 ? (
          <EmptyState />
        ) : (
          <Wrapper>
            <GridTemplate products={wishlistItems} isWide />
          </Wrapper>
        )}
      </UserTemplate>
    </TransitionTemplate>
  );
};

export default WishlistView;
