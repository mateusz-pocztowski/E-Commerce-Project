import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: 25px 0 10px;
  text-align: center;
  color: ${({ theme }) => theme.dark};
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.subFont};
  ${({ theme }) => theme.mq.xs} {
    margin: 40px 0 25px;
  }
  ${({ theme }) => theme.mq.xl} {
    margin: 50px 0 30px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.medium};
  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.fontSize.lm};
  }
  &:before,
  &:after {
    ${({ theme }) => theme.mq.xs} {
      content: '';
    }
    display: inline-block;
    width: 60px;
    height: 2px;
    margin: 0 20px;
    background-color: ${({ theme }) => theme.dark};
  }
`;

const SubTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.gray};
`;

const SectionHeader = ({ title, subTitle }) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Wrapper>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

SectionHeader.defaultProps = {
  subTitle: null,
};

export default SectionHeader;
