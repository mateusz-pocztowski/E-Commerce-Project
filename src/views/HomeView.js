import React from 'react';
import styled from 'styled-components';
import Slider from 'components/organisms/Slider/Slider';
import Categories from 'components/molecules/Categories/Categories';
import FeaturedProducts from 'components/organisms/FeaturedProducts/FeaturedProducts';

const MainWrapper = styled.main`
  margin: 12px;
`;

const HomeView = () => (
  <>
    <Slider />
    <MainWrapper>
      <Categories />
      <FeaturedProducts />
    </MainWrapper>
  </>
);

export default HomeView;
