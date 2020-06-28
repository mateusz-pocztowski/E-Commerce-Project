import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import InputRange from 'react-input-range';
import ProductCategories from 'components/molecules/ProductCategories/ProductCategories';
import PropTypes from 'prop-types';

const Heading = styled.h3`
  margin: 30px 0 22px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.gray};
  font-family: ${({ theme }) => theme.fonts.subFont};
`;

const InputRangeWrapper = styled.div`
  margin: 50px 15px 40px 10px;
`;

const FiltersContent = ({ priceRange, priceHandler }) => (
  <>
    <Input icon="search" placeholder="Search..." />
    <Heading>Categories</Heading>
    <ProductCategories />
    <Heading>Price</Heading>
    <InputRangeWrapper>
      <InputRange
        step={25}
        maxValue={200}
        minValue={0}
        value={priceRange}
        onChange={value => priceHandler(value)}
      />
    </InputRangeWrapper>
  </>
);

FiltersContent.propTypes = {
  priceRange: PropTypes.objectOf(PropTypes.number).isRequired,
  priceHandler: PropTypes.func.isRequired,
};

export default FiltersContent;
