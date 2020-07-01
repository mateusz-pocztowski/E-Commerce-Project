import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import Button from 'components/atoms/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import filtersIcon from 'assets/icons/filters.svg';
import { defaultStyle } from 'components/molecules/AddItemModal/SelectCustom';
import 'components/atoms/Input/RangeInput.css';
import AsideFilters from 'components/molecules/Filters/AsideFilters';
import FiltersContent from 'components/molecules/Filters/FiltersContent';
import useSkeleton from 'hooks/useSkeleton';
import EmptyState from 'components/molecules/EmptyState/EmptyState';
import GridTemplate from 'templates/GridTemplate';
import { fetchProducts, setSearchValue, PRODUCT_FETCH_LIMIT } from 'actions';
import FiltersProvider from 'context/FiltersContext';
import {
  priceEndP,
  categoryEndP,
  sortEndP,
  searchEndP,
} from 'helpers/endpoints';

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

const MainWrapper = styled.main`
  width: 100%;
  padding-bottom: 50px;
`;

const SideMenu = styled.aside`
  display: none;
  flex-basis: 460px;
  padding-right: 30px;
  height: 100%;
  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
`;

const SelectWrapper = styled.div`
  margin-left: auto;
  width: 190px;
`;

const Filter = styled.button`
  display: block;
  background-image: url(${filtersIcon});
  background-size: 21px;
  background-position: 10px 50%;
  background-repeat: no-repeat;
  padding: 9px 12px 9px 38px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #ddd;
  cursor: pointer;
  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  width: 220px;
  margin: 30px auto 0;
`;

const options = [
  { value: 'featured', label: 'Featured' },
  { value: 'priceASC', label: 'Price, low to high' },
  { value: 'priceDESC', label: 'Price, high to low' },
  { value: 'alphabetASC', label: 'Alphabetically, A-Z' },
  { value: 'alphabetDESC', label: 'Alphabetically, Z-A' },
];

const ProductTemplate = () => {
  const allProducts = useSelector(({ products }) => products);
  const givenSearchedValue = useSelector(({ searchValue }) => searchValue);

  const [priceRange, setPriceRange] = useState({ min: 0, max: 150 });
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState(options[0]);
  const [searchInputValue, setSearchInputValue] = useState(givenSearchedValue);
  const [areAsideFiltersVisible, setAsideFiltersVisibility] = useState(false);

  const dispatch = useDispatch();

  const applyFilters = (isNew = false) => {
    if (allProducts.length === 0 && givenSearchedValue.length >= 3) return;
    const endpoint = `${
      categoryEndP(categories) +
      priceEndP(priceRange) +
      sortEndP(sortBy.value) +
      searchEndP(givenSearchedValue)
    }`;

    dispatch(fetchProducts(endpoint, isNew));
  };

  const includeCategory = categoryName => {
    if (categories.some(category => category === categoryName)) {
      const newCategories = categories.filter(
        category => category !== categoryName,
      );
      setCategories(newCategories);
    } else setCategories([...categories, categoryName]);
  };

  const handleSearch = e => {
    dispatch(setSearchValue(e.target.value));
  };

  useEffect(() => {
    applyFilters();
    setSearchInputValue(givenSearchedValue);
  }, [sortBy, givenSearchedValue]);

  const filters = {
    priceRange,
    priceHandler: setPriceRange,
    searchValue: searchInputValue,
    handleSearch,
    markedCategories: categories,
    includeCategory,
    applyFilters,
    close: setAsideFiltersVisibility,
  };

  return (
    <UserTemplate>
      <Wrapper>
        <FiltersProvider filters={filters}>
          <AsideFilters
            isOpen={areAsideFiltersVisible}
            close={() => setAsideFiltersVisibility(false)}
          />
          <SideMenu>
            <FiltersContent />
          </SideMenu>
        </FiltersProvider>
        <MainWrapper>
          <OptionsWrapper>
            <Filter onClick={() => setAsideFiltersVisibility(true)}>
              Filters
            </Filter>
            <SelectWrapper>
              <Select
                options={options}
                styles={defaultStyle}
                onChange={option => setSortBy(option)}
                value={sortBy}
              />
            </SelectWrapper>
          </OptionsWrapper>
          {!useSkeleton() && allProducts.length === 0 && <EmptyState />}
          <GridTemplate products={allProducts} />
          {!useSkeleton() && PRODUCT_FETCH_LIMIT === allProducts.length && (
            <StyledButton onClick={() => applyFilters(true)} secondary>
              Load more
            </StyledButton>
          )}
        </MainWrapper>
      </Wrapper>
    </UserTemplate>
  );
};

export default ProductTemplate;
