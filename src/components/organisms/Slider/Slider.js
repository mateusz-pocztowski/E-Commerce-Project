import React, { useState, useRef, useEffect, useCallback } from 'react';
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
    id: 0,
    title: 'Discover the\nlifestyle',
    subTitle: 'Our collection is flattering on all body types.',
    btnContent: 'Shop now',
    image: bannerImage1,
    smallImage: bannerImage1small,
  },
  {
    id: 1,
    title: 'Find your\nstyle',
    subTitle: 'Keep time with the contemporary designs.',
    btnContent: 'Shop now',
    image: bannerImage2,
    smallImage: bannerImage2small,
  },
  {
    id: 2,
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

const TIMEOUT_DURATION = 5000;

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const slide = useCallback(() => {
    const nextSlide = (activeSlide + 1) % slides.length;
    setActiveSlide(nextSlide);
  }, [activeSlide]);

  const changeToSlide = slideIndex => {
    if (!isAnimating) setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const setSlideTimeout = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(slide, TIMEOUT_DURATION);

      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    };

    setSlideTimeout();

    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(setSlideTimeout);
    };
  }, [activeSlide, slide]);

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
