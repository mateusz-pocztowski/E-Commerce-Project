import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding-top: 65px;
  min-height: 85vh;
  ${({ theme }) => theme.mq.lg} {
    padding-top: 85px;
  }
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  padding: 0 15px;
  ${({ theme }) => theme.mq.md} {
    padding: 0 30px;
  }
`;

const HeadingWrapper = styled.div`
  padding: 20px 0;
  box-shadow: 0 -1px #ddd inset;
  ${({ theme }) => theme.mq.lg} {
    padding: 35px 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.dark};
  text-transform: capitalize;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.lm};
  }
`;

const UserTemplate = ({ children, page }) => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <InnerWrapper>
          <Title>{page}</Title>
        </InnerWrapper>
      </HeadingWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};

UserTemplate.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserTemplate;
