import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import TransitionTemplate from 'templates/TransitionTemplate';

const UserView = () => (
  <TransitionTemplate>
    <UserTemplate />
  </TransitionTemplate>
);

export default UserView;
