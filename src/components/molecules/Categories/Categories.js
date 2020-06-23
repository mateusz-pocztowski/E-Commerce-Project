import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import categoryImg1 from 'assets/images/category1.jpg';
import categoryImg2 from 'assets/images/category2.jpg';
import categoryImg3 from 'assets/images/category3.jpg';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mq.xl} {
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

const Category = styled.div`
  flex-basis: 100%;
  position: relative;
  transition: 0.2s;
  margin-top: 12px;
  overflow: hidden;
  ${({ theme }) => theme.mq.sm} {
    margin: 10px;
    flex-basis: calc(50% - 20px);
    &:nth-child(1) {
      flex-basis: 100%;
      max-height: 200px;
      ${({ theme }) => theme.mq.md} {
        max-height: 320px;
      }
    }
  }
  ${({ theme }) => theme.mq.xl} {
    flex-basis: 31.5% !important;
    max-height: 100% !important;
  }
`;

const CategoryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.7s;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 2;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: 0.35s;
  opacity: 0.85;
  font-weight: ${({ theme }) => theme.medium};
  border-radius: 2px;
  text-transform: none;
  padding: 18px 40px !important;
`;

const StyledLink = styled(Link)`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(53, 129, 200, 0.2), rgba(2, 15, 32, 0.2))
      no-repeat center;
    z-index: 1;
  }
  &:hover > ${CategoryImage} {
    transform: scale3d(1.1, 1.1, 1);
    cursor: pointer;
  }
  &:hover > ${StyledButton} {
    opacity: 1;
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
  }
`;

const Categories = () => (
  <Wrapper>
    <Category>
      <StyledLink to="/">
        <CategoryImage src={categoryImg1} />
        <StyledButton>Shoes</StyledButton>
      </StyledLink>
    </Category>
    <Category>
      <StyledLink to="/">
        <CategoryImage src={categoryImg2} />
        <StyledButton>Clothing</StyledButton>
      </StyledLink>
    </Category>
    <Category>
      <StyledLink to="/">
        <CategoryImage src={categoryImg3} />
        <StyledButton>Accessories</StyledButton>
      </StyledLink>
    </Category>
  </Wrapper>
);

export default Categories;
