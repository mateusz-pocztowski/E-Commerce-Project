/* eslint-disable react/no-array-index-key */
import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import { PageContext } from 'context/PageContext';
import Button from 'components/atoms/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Select from 'react-select';
import filtersIcon from 'assets/icons/filters.svg';
import { defaultStyle } from 'components/molecules/AddItemModal/SelectCustom';
import 'components/atoms/Input/RangeInput.css';
import AsideFilters from 'components/molecules/Filters/AsideFilters';
import FiltersContent from 'components/molecules/Filters/FiltersContent';
import SkeletonCard from 'components/molecules/ProductCard/SkeletonCard';
import { motion } from 'framer-motion';
import useSkeleton from 'hooks/useSkeleton';
import EmptyState from 'components/molecules/EmptyState/EmptyState';
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

  const page = useContext(PageContext);
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  const applyFilters = (isNew = false) => {
    const endpoint = `${
      categoryEndP(categories) +
      priceEndP(priceRange) +
      sortEndP(sortBy.value) +
      searchEndP(searchInputValue)
    }`;

    setAsideFiltersVisibility(false);
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
    setSearchInputValue(e.target.value);
  };

  useEffect(() => {
    applyFilters();
    dispatch(setSearchValue(''));
  }, [sortBy, givenSearchedValue]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(applyFilters, 700);

    return () => clearTimeout(timeoutRef.current);
  }, [searchInputValue.length >= 3 && !givenSearchedValue]);

  const filters = {
    priceRange,
    priceHandler: setPriceRange,
    searchValue: searchInputValue,
    handleSearch,
    markedCategories: categories,
    includeCategory,
    applyFilters,
  };

  return (
    <UserTemplate page={page}>
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
          {!useSkeleton() && allProducts.length === 0 && (
            <EmptyState type={page} />
          )}
          <GridWrapper>
            {useSkeleton()
              ? Array(allProducts.length || 6)
                  .fill()
                  .map((_, id) => <SkeletonCard key={id} />)
              : allProducts.map(({ id, name, price, image }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <ProductCard
                      id={id}
                      name={name}
                      price={price}
                      img={image}
                    />
                  </motion.div>
                ))}
          </GridWrapper>
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
