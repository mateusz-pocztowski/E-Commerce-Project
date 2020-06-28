import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Slider from 'components/organisms/Slider/Slider';
import ParallaxImage from 'assets/images/summer-sale.jpg';
import Categories from 'components/molecules/Categories/Categories';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import FeaturedProducts from 'components/organisms/FeaturedProducts/FeaturedProducts';
import Parallax from 'components/molecules/Parallax/Parallax';
import Features from 'components/molecules/Features/Features';
import TransitionTemplate from 'templates/TransitionTemplate';

const Wrapper = styled.div`
  margin: 12px;
`;

const HomeView = () => {
  const featuredItems = useSelector(({ featured }) => featured);
  return (
    <TransitionTemplate>
      <Slider />
      <main>
        <Wrapper>
          <Categories />
          {featuredItems.length !== 0 && (
            <>
              <SectionHeader
                title="Trending"
                subTitle="Top view in this week"
              />
              <FeaturedProducts products={featuredItems.slice(0, 6)} />
            </>
          )}
        </Wrapper>
        <Parallax img={ParallaxImage} />
        <Wrapper>
          {featuredItems.length !== 0 && (
            <>
              <SectionHeader
                title="Best sellers"
                subTitle="Top sale in this week"
              />
              <FeaturedProducts products={featuredItems.slice(6, 12)} />
            </>
          )}
          <Features />
        </Wrapper>
      </main>
    </TransitionTemplate>
  );
};

export default HomeView;
