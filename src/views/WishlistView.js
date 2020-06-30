import React, { useContext } from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import UserTemplate from 'templates/UserTemplate';
import { useSelector } from 'react-redux';
import { PageContext } from 'context/PageContext';
import EmptyState from 'components/molecules/EmptyState/EmptyState';

const Wrapper = styled.main`
  padding: 30px 0 50px;
`;

const WishlistView = () => {
  const wishlistItems = useSelector(({ wishlist }) => wishlist);
  const page = useContext(PageContext);
  return (
    <UserTemplate page={page}>
      {wishlistItems.length === 0 ? (
        <EmptyState type={page} />
      ) : (
        <Wrapper>
          <GridTemplate products={wishlistItems} isWide />
        </Wrapper>
      )}
    </UserTemplate>
  );
};

export default WishlistView;
