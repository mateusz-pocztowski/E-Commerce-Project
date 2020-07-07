import React, { useEffect, useReducer, useCallback } from 'react';
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
import { fetchProducts, setSearchValues, PRODUCT_FETCH_LIMIT } from 'actions';
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
  const givenSearchedValue = useSelector(
    ({ searchValues }) => searchValues.search,
  );
  const givenCategories = useSelector(
    ({ searchValues }) => searchValues.categories,
  );

  const allProducts = useSelector(({ products }) => products);
  const isDataFetching = useSelector(({ isDataLoading }) => isDataLoading);
  const dispatchToStore = useDispatch();

  const initialFilters = {
    priceRange: { min: 0, max: 150 },
    sortBy: options[0],
    categories: givenCategories,
    searchInputValue: givenSearchedValue,
    areAsideFiltersVisible: false,
  };

  const [filters, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'PRICE':
        return {
          ...state,
          priceRange: action.payload,
        };
      case 'SORT_BY':
        return {
          ...state,
          sortBy: action.payload,
        };
      case 'CATEGORIES':
        return {
          ...state,
          categories: action.payload,
        };
      case 'SEARCH':
        return {
          ...state,
          searchInputValue: action.payload,
        };
      case 'SHOW_ASIDE_FILTERS':
        return {
          ...state,
          areAsideFiltersVisible: true,
        };
      case 'HIDE_ASIDE_FILTERS':
        return {
          ...state,
          areAsideFiltersVisible: false,
        };
      default:
        return state;
    }
  }, initialFilters);

  const applyFilters = (isNew = false) => {
    if (allProducts.length === 0 && filters.searchInputValue.length >= 3)
      return;
    const endpoint = `${
      categoryEndP(filters.categories) +
      priceEndP(filters.priceRange) +
      sortEndP(filters.sortBy.value) +
      searchEndP(filters.searchInputValue)
    }`;

    dispatchToStore(fetchProducts(endpoint, isNew));
  };

  const clearFilters = useCallback(() => {
    dispatch({ type: 'PRICE', payload: { min: 0, max: 150 } });
    dispatch({ type: 'CATEGORIES', payload: [] });
    dispatch({ type: 'SORT_BY', payload: options[0] });
    dispatchToStore(setSearchValues('search', ''));
    dispatchToStore(setSearchValues('categories', []));
  }, [dispatchToStore]);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line
  }, [filters.sortBy, filters.searchInputValue]);

  useEffect(() => {
    dispatch({ type: 'SEARCH', payload: givenSearchedValue });

    return () => clearFilters();
  }, [givenSearchedValue, clearFilters]);

  const includeCategory = categoryName => {
    if (filters.categories.some(category => category === categoryName)) {
      const newCategories = filters.categories.filter(
        category => category !== categoryName,
      );
      dispatch({ type: 'CATEGORIES', payload: newCategories });
    } else
      dispatch({
        type: 'CATEGORIES',
        payload: [...filters.categories, categoryName],
      });
  };

  const handleSearch = e => {
    dispatch({ type: 'SEARCH', payload: e.target.value });
  };

  const catalogFilters = {
    priceRange: filters.priceRange,
    priceHandler: value => dispatch({ type: 'PRICE', payload: value }),
    searchValue: filters.searchInputValue,
    handleSearch,
    markedCategories: filters.categories,
    includeCategory,
    applyFilters,
    clearFilters,
    close: () => dispatch({ type: 'HIDE_ASIDE_FILTERS' }),
  };

  const isSkeletonLoading = useSkeleton();

  return (
    <UserTemplate>
      <Wrapper>
        <FiltersProvider filters={catalogFilters}>
          <AsideFilters
            isOpen={filters.areAsideFiltersVisible}
            close={() => dispatch({ type: 'HIDE_ASIDE_FILTERS' })}
          />
          <SideMenu>
            <FiltersContent />
          </SideMenu>
        </FiltersProvider>
        <MainWrapper>
          <OptionsWrapper>
            <Filter onClick={() => dispatch({ type: 'SHOW_ASIDE_FILTERS' })}>
              Filters
            </Filter>
            <SelectWrapper>
              <Select
                options={options}
                styles={defaultStyle}
                onChange={option =>
                  dispatch({ type: 'SORT_BY', payload: option })
                }
                value={filters.sortBy}
              />
            </SelectWrapper>
          </OptionsWrapper>
          {!isDataFetching &&
            !isSkeletonLoading &&
            allProducts.length === 0 && <EmptyState />}
          <GridTemplate products={allProducts} />
          {!isSkeletonLoading && PRODUCT_FETCH_LIMIT === allProducts.length && (
            <StyledButton onClick={() => applyFilters(true)} secondary="true">
              Load more
            </StyledButton>
          )}
        </MainWrapper>
      </Wrapper>
    </UserTemplate>
  );
};

export default ProductTemplate;
