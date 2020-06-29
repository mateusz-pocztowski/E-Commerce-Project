import React from 'react';
import ProductTemplate from 'templates/ProductTemplate';
import TransitionTemplate from 'templates/TransitionTemplate';

const CatalogView = () => (
  <TransitionTemplate transition={1}>
    <ProductTemplate />
  </TransitionTemplate>
);

export default CatalogView;
