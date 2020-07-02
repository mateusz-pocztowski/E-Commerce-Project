import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import checkIcon from 'assets/icons/checkmark.svg';
import Skeleton from 'react-loading-skeleton';
import { FiltersContext } from 'context/FiltersContext';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const StyledSkeleton = styled(Skeleton)`
  margin: 8px 0;
`;

const CategoryWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.gray100};
  transition: 0.2s;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.gray};
  }
`;

const Category = styled.span`
  display: block;
  padding: 5px 0;
  color: inherit;
  text-decoration: none;
  margin-left: 15px;
`;

const Checkmark = styled.span`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  overflow: hidden;
  &:after {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 20px;
    height: 20px;
    background: url(${checkIcon}) center no-repeat;
    background-size: 70%;
    background-color: ${({ theme }) => theme.blue};
  }
`;

const CategoriesFilters = () => {
  const allCategories = useSelector(({ categories }) => categories);
  const isLoading = useSelector(({ isDataLoading }) => isDataLoading);
  const { includeCategory, markedCategories } = useContext(FiltersContext);

  return (
    <Wrapper>
      {isLoading && allCategories.length === 0 && <StyledSkeleton count={6} />}
      {allCategories.map(({ name, total }) => (
        <CategoryWrapper key={name} onClick={() => includeCategory(name)}>
          <Checkmark
            isActive={markedCategories.some(category => category === name)}
          />
          <Category>{`${name} (${total})`}</Category>
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
};

export default CategoriesFilters;
