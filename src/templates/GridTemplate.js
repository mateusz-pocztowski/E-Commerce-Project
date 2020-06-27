import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import { PageContext } from 'context/PageContext';
import { useSelector } from 'react-redux';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Input from 'components/atoms/Input/Input';
import InputRange from 'react-input-range';
import Select from 'react-select';
import filtersIcon from 'assets/icons/filters.svg';
import EmptyState from 'components/molecules/EmptyState/EmptyState';
import 'components/atoms/Input/RangeInput.css';

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

const Menu = styled.aside`
  display: none;
  flex-basis: 460px;
  padding-right: 30px;
  height: 100%;
  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
`;

const Heading = styled.h3`
  margin: 30px 0 22px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.gray};
  font-family: ${({ theme }) => theme.fonts.subFont};
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuItem = styled.li`
  width: 100%;
  color: ${({ theme }) => theme.gray100};
  transition: 0.2s;
  margin: 5px 0;
  &:hover {
    color: ${({ theme }) => theme.gray};
  }
`;

const MenuLink = styled.a`
  display: block;
  padding: 5px 0;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const InputRangeWrapper = styled.div`
  margin: 50px 15px 40px 10px;
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
  const page = useContext(PageContext);

  const allProducts = useSelector(({ products }) => products);
  const allCategories = useSelector(({ categories }) => categories);

  return (
    <UserTemplate page={page}>
      {allProducts.length === 0 ? (
        <EmptyState type={page} />
      ) : (
        <Wrapper>
          <Menu>
            <Input icon="search" placeholder="Search..." />
            <Heading>Categories</Heading>
            <MenuList>
              {allCategories.map(({ name, total }) => (
                <MenuItem key={name}>
                  <MenuLink>{`${name} (${total})`}</MenuLink>
                </MenuItem>
              ))}
            </MenuList>
            <Heading>Price</Heading>
            <InputRangeWrapper>
              <InputRange
                step={25}
                maxValue={200}
                minValue={0}
                value={priceRange}
                onChange={value => setPriceRange(value)}
              />
            </InputRangeWrapper>
          </Menu>
          <div>
            <OptionsWrapper>
              <Button>Filter</Button>
              <SelectWrapper>
                <Select placeholder="Featured" />
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
