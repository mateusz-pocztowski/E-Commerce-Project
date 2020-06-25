import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'actions';
import styled from 'styled-components';
import Slider from 'components/organisms/Slider/Slider';
import ParallaxImage from 'assets/images/summer-sale.jpg';
import Categories from 'components/molecules/Categories/Categories';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import FeaturedProducts from 'components/organisms/FeaturedProducts/FeaturedProducts';
import Parallax from 'components/molecules/Parallax/Parallax';
import Features from 'components/molecules/Features/Features';

const Wrapper = styled.div`
  margin: 12px;
`;

const HomeView = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(({ products }) => products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Slider />
      <main>
        <Wrapper>
          <Categories />
          <SectionHeader title="Trending" subTitle="Top view in this week" />
          <FeaturedProducts products={allProducts.slice(0, 6)} />
        </Wrapper>
        <Parallax img={ParallaxImage} />
        <Wrapper>
          <SectionHeader
            title="Best sellers"
            subTitle="Top sale in this week"
          />
          <FeaturedProducts products={allProducts.slice(6, 12)} />
          <Features />
        </Wrapper>
      </main>
    </>
  );
};

export default HomeView;
