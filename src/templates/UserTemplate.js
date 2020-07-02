import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PageContext } from 'context/PageContext';

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
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  padding: 20px 0;
  box-shadow: 0 -1px #ddd inset;
  ${({ theme }) => theme.mq.lg} {
    padding: 35px 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.dark};
  text-transform: capitalize;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.lm};
  }
`;

const UserTemplate = ({ children, header }) => {
  const page = useContext(PageContext);
  return (
    <Wrapper>
      <HeadingWrapper isVisible={header}>
        <InnerWrapper>
          <Title>{page}</Title>
        </InnerWrapper>
      </HeadingWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  header: PropTypes.bool,
};

UserTemplate.defaultProps = {
  header: true,
};

export default UserTemplate;
