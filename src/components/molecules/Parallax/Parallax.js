import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  background: linear-gradient(rgba(53, 129, 200, 0.3), rgba(2, 15, 32, 0.3)),
    url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  ${({ theme }) => theme.mq.md} {
    height: 400px;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.lm};
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const Heading = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.specialFont};
  font-weight: ${({ theme }) => theme.medium};
  font-size: 1.4em;
  line-height: 0;
`;

const Title = styled.h1`
  margin: 15px 0;
  font-size: 2em;
  font-size: ${({ theme }) => theme.fonts.subFont};
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  text-transform: none;
  width: 220px;
`;

const Parallax = ({ img }) => (
  <Wrapper image={img}>
    <HeaderWrapper>
      <Heading>New Summer Sale</Heading>
      <Title>40% OFF</Title>
      <StyledButton as={Link} to="/catalog">
        Shop now
      </StyledButton>
    </HeaderWrapper>
  </Wrapper>
);

Parallax.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Parallax;
