import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  return (
    <Wrapper>
      {allCategories.map(({ name, total }) => (
        <CategoryWrapper key={name}>
          <Category>{`${name} (${total})`}</Category>
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
};

export default ProductCategories;
