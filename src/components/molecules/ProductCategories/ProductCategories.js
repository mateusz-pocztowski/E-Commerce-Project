import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { category } from 'helpers/endpoints';
import { fetchProducts } from 'actions';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const CategoryWrapper = styled.li`
  width: 100%;
  color: ${({ theme }) => theme.gray100};
  transition: 0.2s;
  margin: 5px 0;
  &:hover {
    color: ${({ theme }) => theme.gray};
  }
`;

const Category = styled.a`
  display: block;
  padding: 5px 0;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const ProductCategories = () => {
  const allCategories = useSelector(({ categories }) => categories);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <CategoryWrapper>
        <Category
          onClick={() => dispatch(fetchProducts())}
        >{`All (${allCategories.reduce(
          (acc, { total }) => acc + total,
          0,
        )})`}</Category>
      </CategoryWrapper>
      {allCategories.map(({ name, total }) => (
        <CategoryWrapper key={name}>
          <Category
            onClick={() => dispatch(fetchProducts(category(name)))}
          >{`${name} (${total})`}</Category>
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
};

export default ProductCategories;
