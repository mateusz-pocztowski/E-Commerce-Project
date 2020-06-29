import React, { useContext } from 'react';
import UserTemplate from 'templates/UserTemplate';
import TransitionTemplate from 'templates/TransitionTemplate';
import { PageContext } from 'context/PageContext';
import { useSelector } from 'react-redux';
import EmptyState from 'components/molecules/EmptyState/EmptyState';

const UserView = () => {
  const page = useContext(PageContext);
  const cartItems = useSelector(({ cart }) => cart);

  return (
    <TransitionTemplate transition={1}>
      <UserTemplate page={page}>
        {cartItems.length === 0 ? (
          <EmptyState type={page} />
        ) : (
          <div>
            <h1>siema</h1>
          </div>
        )}
      </UserTemplate>
    </TransitionTemplate>
  );
};

export default UserView;
