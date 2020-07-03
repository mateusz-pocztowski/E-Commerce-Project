import React, { useContext } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import InputRange from 'react-input-range';
import CategoriesFilters from 'components/molecules/Filters/CategoriesFilters';
import Button from 'components/atoms/Button/Button';
import { FiltersContext } from 'context/FiltersContext';

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

const ButtonsWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  margin: 0 5px 0 0;
  &:hover {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.dark};
  }
`;

const FilterButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
  border-color: ${({ theme }) => theme.dark};
`;

const FiltersContent = () => {
  const {
    priceRange,
    priceHandler,
    applyFilters,
    clearFilters,
    searchValue,
    handleSearch,
    close,
  } = useContext(FiltersContext);

  const handleApply = () => {
    applyFilters();
    close();
  };

  return (
    <>
      <Input
        icon="search"
        placeholder="Search..."
        value={searchValue}
        onChange={e => handleSearch(e)}
      />
      <Heading>Categories</Heading>
      <CategoriesFilters />
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
      <ButtonsWrapper>
        <StyledButton secondary="true" onClick={() => handleApply()}>
          Filter
        </StyledButton>
        <FilterButton secondary="true" onClick={() => clearFilters()}>
          Clear
        </FilterButton>
      </ButtonsWrapper>
    </>
  );
};

export default FiltersContent;
