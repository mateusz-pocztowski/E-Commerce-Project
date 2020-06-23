import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 20px 30px;
  padding-right: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  ${({ theme }) => theme.mq.sm} {
    flex-basis: calc(50% - 20px);
    margin: 10px;
  }
  ${({ theme }) => theme.mq.xl} {
    max-width: 300px;
  }
  ${({ theme }) => theme.mq.xxl} {
    max-width: 350px;
    padding: 28px 40px;
    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const Icon = styled.div`
  width: 55px;
  height: 55px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.dark};
`;

const SubTitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  color: ${({ theme }) => theme.gray};
`;

const Card = ({ title, subTitle, icon }) => (
  <Wrapper>
    <Icon icon={icon} />
    <ContentWrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ContentWrapper>
  </Wrapper>
);

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Card;
