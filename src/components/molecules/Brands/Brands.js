import React from 'react';
import styled from 'styled-components';
import TinySlider from 'tiny-slider-react';
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

const Wrapper = styled.section`
  border-top: 1px solid #eaeaea;
`;

const Brand = styled.div`
  padding: 40px 0;
  text-align: center;
`;

const settings = {
  items: 2,
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  responsive: {
    400: { items: 3 },
    500: { items: 4 },
    768: { items: 5 },
    950: { items: 6 },
    1100: { items: 7 },
    1400: { items: 8 },
    1700: { items: 9 },
  },
};

const Brands = () => (
  <Wrapper>
    <TinySlider settings={settings}>
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
    </TinySlider>
  </Wrapper>
);

export default Brands;
