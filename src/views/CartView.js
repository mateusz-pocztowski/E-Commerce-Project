import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import TransitionTemplate from 'templates/TransitionTemplate';
import CartTemplate from 'templates/CartTemplate';
import EmptyState from 'components/molecules/EmptyState/EmptyState';
import { useSelector } from 'react-redux';

const CartView = () => {
  const cartItems = useSelector(({ cart }) => cart);
  return (
    <TransitionTemplate transition={1}>
      <UserTemplate>
        {cartItems.length === 0 ? (
          <EmptyState />
        ) : (
          <CartTemplate cartItems={cartItems} />
        )}
      </UserTemplate>
    </TransitionTemplate>
  );
};

export default CartView;
