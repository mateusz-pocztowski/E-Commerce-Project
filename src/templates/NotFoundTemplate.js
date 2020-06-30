import React from 'react';
import Title from 'components/atoms/Title/Title';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  color: ${({ theme }) => theme.dark300};
`;

const StyledTitle = styled(Title)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xxxl} !important;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 20px;
`;

const StyledButton = styled(Button)`
  width: 260px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
`;

const NotFoundTemplate = ({ type }) => {
  return (
    <Wrapper>
      <StyledTitle>404</StyledTitle>
      <StyledHeading>Oops! {type} not found :(</StyledHeading>
      <StyledButton
        as={Link}
        to={type === 'Product' ? '/catalog' : '/'}
        secondary
      >
        {type === 'Product' ? 'Go back shopping' : 'Homepage'}
      </StyledButton>
    </Wrapper>
  );
};

NotFoundTemplate.propTypes = {
  type: PropTypes.string,
};

NotFoundTemplate.defaultProps = {
  type: 'Page',
};

export default NotFoundTemplate;
