import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import { PageContext } from 'context/PageContext';
import { useSelector } from 'react-redux';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Select from 'react-select';
import filtersIcon from 'assets/icons/filters.svg';
import EmptyState from 'components/molecules/EmptyState/EmptyState';
import { defaultStyle } from 'components/molecules/AddItemModal/SelectCustom';
import 'components/atoms/Input/RangeInput.css';
import AsideFilters from 'components/molecules/Filters/Filters';
import FiltersContent from 'components/molecules/Filters/FiltersContent';

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

const Button = styled.button`
  display: block;
  background-image: url(${filtersIcon});
  background-size: 24px;
  background-position: 10px 50%;
  background-repeat: no-repeat;
  padding: 10px 12px 10px 42px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #ddd;
  cursor: pointer;
  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;

const GridTemplate = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [areAsideFiltersVisible, setAsideFiltersVisibility] = useState(false);
  const page = useContext(PageContext);

  const allProducts = useSelector(({ products }) => products);

  return (
    <UserTemplate page={page}>
      {allProducts.length === 0 ? (
        <EmptyState type={page} />
      ) : (
        <Wrapper>
          <AsideFilters
            isOpen={areAsideFiltersVisible}
            close={() => setAsideFiltersVisibility(false)}
            priceRange={priceRange}
            priceHandler={setPriceRange}
          />
          <SideMenu>
            <FiltersContent
              priceRange={priceRange}
              priceHandler={setPriceRange}
            />
          </SideMenu>
          <div>
            <OptionsWrapper>
              <Button onClick={() => setAsideFiltersVisibility(true)}>
                Filter
              </Button>
              <SelectWrapper>
                <Select
                  placeholder="Featured"
                  options={[{ value: 'Ascending', label: 'Ascending' }]}
                  styles={defaultStyle}
                />
              </SelectWrapper>
            </OptionsWrapper>
            <GridWrapper>
              {allProducts.map(({ id, name, price, image }) => (
                <ProductCard
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  img={image}
                />
              ))}
            </GridWrapper>
          </div>
        </Wrapper>
      )}
    </UserTemplate>
  );
};

export default GridTemplate;
