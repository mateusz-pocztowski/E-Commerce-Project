/* eslint-disable react/no-array-index-key */
import React from 'react';
import TinySlider from 'tiny-slider-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import SkeletonCard from 'components/molecules/ProductCard/SkeletonCard';

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  controls: false,
  loop: false,
  gutter: 16,
  fixedWidth: 260,
  responsive: {
    400: {
      fixedWidth: 300,
    },
    600: {
      fixedWidth: 360,
    },
  },
};

const Wrapper = styled.section`
  margin-bottom: 30px;
  ${({ theme }) => theme.mq.sm} {
    margin: 0 16px 30px;
  }
  ${({ theme }) => theme.mq.xl} {
    margin: 0 32px 50px;
  }
`;

const FeaturedProducts = ({ products }) => (
  <Wrapper>
    {products.length === 0 && (
      <TinySlider settings={settings}>
        {Array(6)
          .fill()
          .map((_, id) => (
            <SkeletonCard key={id} />
          ))}
      </TinySlider>
    )}
    {products.length !== 0 && (
      <TinySlider settings={settings}>
        {products.map(({ id, name, price, image, alt }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            image={image}
            alt={alt}
          />
        ))}
      </TinySlider>
    )}
  </Wrapper>
);

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeaturedProducts;
