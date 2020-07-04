/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import SkeletonCard from 'components/molecules/ProductCard/SkeletonCard';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const StyledCarousel = styled(Carousel)`
  .slides {
    padding-right: 16px;
  }
`;

const Wrapper = styled.section`
  margin-bottom: 30px;
  ${({ theme }) => theme.mq.sm} {
    margin: 0 16px 30px;
  }
  ${({ theme }) => theme.mq.xl} {
    margin: 0 32px 50px;
  }
`;

const responsive = {
  xxxl: {
    breakpoint: { max: 5000, min: 1600 },
    partialVisibilityGutter: 80,
    items: 4,
  },
  xxl: {
    breakpoint: { max: 1600, min: 1400 },
    partialVisibilityGutter: 10,
    items: 4,
  },
  xl: {
    breakpoint: { max: 1400, min: 1024 },
    partialVisibilityGutter: 40,
    items: 3,
  },
  lg: {
    breakpoint: { max: 1024, min: 800 },
    partialVisibilityGutter: 100,
    items: 2,
  },
  m: {
    breakpoint: { max: 800, min: 600 },
    partialVisibilityGutter: 10,
    items: 2,
  },
  s: {
    breakpoint: { max: 600, min: 480 },
    partialVisibilityGutter: 100,
    items: 1,
  },
  xs: {
    breakpoint: { max: 400, min: 0 },
    partialVisibilityGutter: 40,
    items: 1,
  },
};

const FeaturedProducts = ({ products }) => {
  const [slides, setSlides] = useState([]);
  const isLoading = useSelector(({ isDataLoading }) => isDataLoading);

  useEffect(() => {
    const setSlidesToShow = () => {
      const slidesToShow = isLoading
        ? Array(6)
            .fill()
            .map((_, id) => <SkeletonCard key={id} draggable={false} />)
        : products.map(({ id, name, price, image }) => (
            <ProductCard
              draggable={false}
              key={id}
              id={id}
              name={name}
              price={price}
              image={image}
            />
          ));
      setSlides(slidesToShow);
    };
    setSlidesToShow();
  }, [isLoading, products]);

  return (
    <Wrapper>
      <StyledCarousel
        arrows={false}
        itemClass="slides"
        partialVisbile
        responsive={responsive}
      >
        {slides}
      </StyledCarousel>
    </Wrapper>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeaturedProducts;
