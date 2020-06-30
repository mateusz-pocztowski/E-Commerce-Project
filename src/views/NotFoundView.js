import React from 'react';
import NotFoundTemplate from 'templates/NotFoundTemplate';
import useLoader from 'hooks/useLoader';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const NotFoundView = () => (
  <>
    <PageLoader isActive={useLoader()} />
    <NotFoundTemplate />
  </>
);

export default NotFoundView;
