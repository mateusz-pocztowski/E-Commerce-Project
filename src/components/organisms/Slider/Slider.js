/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slide from 'components/organisms/Slider/Slide';
import * as Control from 'components/atoms/ControlBars/ControlBars';
import bannerImage1 from 'assets/images/banner1.jpg';
import bannerImage2 from 'assets/images/banner2.jpg';
import bannerImage3 from 'assets/images/banner3.jpg';
import bannerImage1small from 'assets/images/banner1-1150.jpg';
import bannerImage2small from 'assets/images/banner2-1150.jpg';
import bannerImage3small from 'assets/images/banner3-1150.jpg';

const slides = [
  {
    id: 1,
    title: 'Discover the\nlifestyle',
    subTitle: 'Our collection is flattering on all body types.',
    btnContent: 'Shop now',
    image: bannerImage1,
    smallImage: bannerImage1small,
  },
  {
    id: 2,
    title: 'Find your\nstyle',
    subTitle: 'Keep time with the contemporary designs.',
    btnContent: 'Shop now',
    image: bannerImage2,
    smallImage: bannerImage2small,
  },
  {
    id: 3,
    title: 'Summer Sale\n40% Off',
    subTitle: 'Latest seasonal collection has dropped!',
    btnContent: 'Shop now',
    image: bannerImage3,
    smallImage: bannerImage3small,
  },
];

const StyledWrapper = styled.header`
  position: relative;
  margin: 0 auto;
  height: 100vh;
  pointer-events: none;
  background-color: rgb(33, 36, 37);
`;

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const timeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const slideRef = useRef(activeSlide);
  slideRef.current = activeSlide;

  const slide = (index = null) => {
    if (slideRef.current === slides.length) setActiveSlide(0);
    setActiveSlide(index || slideRef.current + 1);
    setSlideTimeout();
  };

  const setSlideTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(slide, 5000);

    isAnimatingRef.current = true;
    setTimeout(() => (isAnimatingRef.current = false), 1000);
  };

  const changeToSlide = slideIndex => {
    if (isAnimatingRef.current) return;
    slide(slideIndex);
  };

  useEffect(() => {
    setSlideTimeout();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <StyledWrapper>
      <Control.Wrapper>
        {slides.map(({ id }) => (
          <Control.Bar
            key={id}
            isActive={activeSlide === id}
            onClick={() => changeToSlide(id)}
          />
        ))}
      </Control.Wrapper>
      {slides.map(({ id, title, subTitle, btnContent, image, smallImage }) => (
        <Slide
          key={id}
          title={title}
          subTitle={subTitle}
          btnContent={btnContent}
          image={image}
          smallImage={smallImage}
          isActive={activeSlide === id}
        />
      ))}
    </StyledWrapper>
  );
};

export default Slider;
