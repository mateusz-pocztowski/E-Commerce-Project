import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import { Title } from 'templates/UserTemplate';

const SectionWrapper = styled.div`
  margin: 30px 0;
`;

const StyledTitle = styled(Title)`
  margin: 25px 0;
  text-align: center;
  text-transform: none;
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.dark300};
  ${({ theme }) => theme.mq.lg} {
    margin: 40px 0;
  }
`;

const OtherItemsSection = ({ items, title }) => (
  <SectionWrapper>
    <StyledTitle>{title}</StyledTitle>
    <GridTemplate explicit products={items} isWide />
  </SectionWrapper>
);

OtherItemsSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default OtherItemsSection;
