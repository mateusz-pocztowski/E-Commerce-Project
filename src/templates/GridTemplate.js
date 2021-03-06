/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css } from 'styled-components';
import SkeletonCard from 'components/molecules/ProductCard/SkeletonCard';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useSkeleton from 'hooks/useSkeleton';

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px;
  ${({ theme }) => theme.mq.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
  }

  ${({ isWide }) =>
    isWide &&
    css`
      ${({ theme }) => theme.mq.xl} {
        grid-template-columns: repeat(4, 1fr);
      }
    `}
  ${({ explicit }) =>
    explicit &&
    css`
      ${({ theme }) => theme.mq.md} {
        & div:nth-child(4) {
          display: none;
        }
      }
      ${({ theme }) => theme.mq.xl} {
        & div:nth-child(4) {
          display: block;
        }
      }
    `}
`;

const GridTemplate = ({ products, isWide, explicit }) => {
  const isSkeletonLoading = useSkeleton();
  const isLoading = useSelector(({ isDataLoading }) => isDataLoading);

  return (
    <GridWrapper explicit={explicit} isWide={isWide}>
      {isLoading || isSkeletonLoading
        ? Array(products.length || 6)
            .fill()
            .map((_, id) => <SkeletonCard key={id} />)
        : products.map(({ id, name, price, image }) => (
            <motion.div
              key={id}
              positionTransition={!explicit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ProductCard id={id} name={name} price={price} image={image} />
            </motion.div>
          ))}
    </GridWrapper>
  );
};

GridTemplate.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  isWide: PropTypes.bool,
  explicit: PropTypes.bool,
};

GridTemplate.defaultProps = {
  isWide: false,
  explicit: false,
};

export default GridTemplate;
