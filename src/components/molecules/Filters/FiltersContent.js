import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import InputRange from 'react-input-range';
import ProductCategories from 'components/molecules/ProductCategories/ProductCategories';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const Heading = styled.h3`
  margin: 30px 0 22px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.gray};
  font-family: ${({ theme }) => theme.fonts.subFont};
`;

const InputRangeWrapper = styled.div`
  margin: 50px 15px 50px 10px;
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  width: 50%;
  margin: 0;
  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.dark};
    border-color: ${({ theme }) => theme.dark};
  }
`;

const FiltersContent = ({ priceRange, priceHandler, applyFilters }) => (
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
    <StyledButton secondary onClick={applyFilters}>
      Filter
    </StyledButton>
  </>
);

FiltersContent.propTypes = {
  priceRange: PropTypes.objectOf(PropTypes.number).isRequired,
  priceHandler: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
};

export default FiltersContent;
