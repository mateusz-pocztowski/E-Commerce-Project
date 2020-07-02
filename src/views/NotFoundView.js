import React from 'react';
import NotFoundTemplate from 'templates/NotFoundTemplate';
import useLoader from 'hooks/useLoader';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const NotFoundView = () => {
  const loading = useLoader();

  return (
    <>
      <PageLoader isActive={loading} />
      <NotFoundTemplate />
    </>
  );
};

export default NotFoundView;
