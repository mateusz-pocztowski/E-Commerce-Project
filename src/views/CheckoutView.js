import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutTemplate from 'templates/CheckoutTemplate';

const CheckoutView = () => {
  const cartItems = useSelector(({ cart }) => cart);
  return (
    <>
      {cartItems.length === 0 && <Redirect to="/" />}
      <CheckoutTemplate items={cartItems} />
    </>
  );
};

export default CheckoutView;
