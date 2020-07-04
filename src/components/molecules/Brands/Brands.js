import React from 'react';
import styled from 'styled-components';
import adidasImg from 'assets/images/brand-adidas.png';
import championImg from 'assets/images/brand-champion.png';
import feewearImg from 'assets/images/brand-feewear.png';
import lottoImg from 'assets/images/brand-lotto.png';
import nbImg from 'assets/images/brand-nb.png';
import nikeImg from 'assets/images/brand-nike.png';
import pumaImg from 'assets/images/brand-puma.png';
import reebokImg from 'assets/images/brand-reebok.png';
import umbroImg from 'assets/images/brand-umbro.png';
import vansImg from 'assets/images/brand-vans.png';
import Carousel from 'react-multi-carousel';

const Wrapper = styled.section`
  border-top: 1px solid #eaeaea;
`;

const Brand = styled.div`
  padding: 40px 0;
  text-align: center;
`;

const responsive = {
  xxxxl: {
    breakpoint: { max: 5000, min: 1700 },
    items: 8,
  },
  xxxl: {
    breakpoint: { max: 1700, min: 1400 },
    items: 8,
  },
  xxl: {
    breakpoint: { max: 1400, min: 1100 },
    items: 7,
  },
  xl: {
    breakpoint: { max: 1100, min: 950 },
    items: 6,
  },
  lg: {
    breakpoint: { max: 950, min: 768 },
    items: 5,
  },
  m: {
    breakpoint: { max: 768, min: 500 },
    items: 4,
  },
  s: {
    breakpoint: { max: 500, min: 0 },
    items: 3,
  },
};

const Brands = () => (
  <Wrapper>
    <Carousel autoPlay arrows={false} responsive={responsive}>
      <Brand>
        <img src={adidasImg} alt="adidas" />
      </Brand>
      <Brand>
        <img src={championImg} alt="champion" />
      </Brand>
      <Brand>
        <img src={lottoImg} alt="lotto" />
      </Brand>
      <Brand>
        <img src={nbImg} alt="new balance" />
      </Brand>
      <Brand>
        <img src={nikeImg} alt="nike" />
      </Brand>
      <Brand>
        <img src={pumaImg} alt="puma" />
      </Brand>
      <Brand>
        <img src={reebokImg} alt="reebok" />
      </Brand>
      <Brand>
        <img src={umbroImg} alt="umbro" />
      </Brand>
      <Brand>
        <img src={vansImg} alt="vans" />
      </Brand>
      <Brand>
        <img src={feewearImg} alt="feewear" />
      </Brand>
    </Carousel>
  </Wrapper>
);

export default Brands;
