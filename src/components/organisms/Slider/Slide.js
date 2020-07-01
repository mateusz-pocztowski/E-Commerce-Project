import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from 'components/atoms/Title/Title';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 600ms ease-in 0.4s;
  z-index: ${({ theme }) => theme.zIndex.level1};
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      z-index: ${({ theme }) => theme.zIndex.level2};
    `};
`;

const InnerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-image: linear-gradient(
      rgba(53, 129, 200, 0.4),
      rgba(2, 15, 32, 0.4)
    ),
    url(${({ smallImg }) => smallImg});
  ${({ theme }) => theme.mq.lg} {
    background-image: linear-gradient(
        rgba(53, 129, 200, 0.4),
        rgba(2, 15, 32, 0.4)
      ),
      url(${({ img }) => img});
  }
`;

const Content = styled.div`
  flex: 1;
  height: 100%;
  max-width: 1560px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 20px;
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.sm} {
    padding: 0 40px;
  }
  ${({ theme }) => theme.mq.md} {
    padding: 0 60px;
  }
  & > * {
    margin: 12px 0;
    opacity: 0;
    transform: translateX(30px);
    transition: transform 0.5s ease, opacity 0.4s ease;
    transition-delay: 0.1s;
    ${({ theme }) => theme.mq.md} {
      margin: 18px 0;
    }
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateX(0);
        opacity: 1;
        &:nth-child(1) {
          transition-delay: 0.8s;
        }
        &:nth-child(2) {
          transition-delay: 0.85s;
        }
        &:nth-child(3) {
          transition-delay: 0.9s;
        }
      `};
  }
`;

const Slide = ({
  title,
  subTitle,
  btnContent,
  image,
  smallImage,
  isActive,
}) => {
  return (
    <Wrapper isActive={isActive}>
      <InnerWrapper img={image} smallImg={smallImage}>
        <Content isActive={isActive}>
          <Title>{title}</Title>
          <Heading>{subTitle}</Heading>
          {btnContent && (
            <div>
              <Button as={Link} to="/catalog">
                {btnContent}
              </Button>
            </div>
          )}
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

Slide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  btnContent: PropTypes.string,
};

Slide.defaultProps = {
  btnContent: null,
};

export default Slide;
