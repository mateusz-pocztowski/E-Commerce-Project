import React from 'react';
import styled from 'styled-components';
import Slider from 'components/organisms/Slider/Slider';
import ParallaxImage from 'assets/images/summer-sale.jpg';
import Categories from 'components/molecules/Categories/Categories';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import FeaturedProducts from 'components/organisms/FeaturedProducts/FeaturedProducts';
import Parallax from 'components/organisms/Parallax/Parallax';

const Wrapper = styled.div`
  margin: 12px;
`;

const HomeView = () => (
  <>
    <Slider />
    <main>
      <Wrapper>
        <Categories />
        <SectionHeader title="Trending" subTitle="Top view in this week" />
        <FeaturedProducts />
      </Wrapper>
    </main>
    <Parallax img={ParallaxImage} />
    <Wrapper>
      <SectionHeader title="Best sellers" subTitle="Top sale in this week" />
      <FeaturedProducts />
    </Wrapper>
  </>
);

export default HomeView;
