import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import TransitionTemplate from 'templates/TransitionTemplate';

const CatalogView = () => (
  <TransitionTemplate transition={1}>
    <GridTemplate />
  </TransitionTemplate>
);

export default CatalogView;
