import React from 'react';
import Aside from 'components/molecules/Aside/Aside';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FiltersContent from './FiltersContent';

const Wrapper = styled.div`
  padding: 20px;
`;

const AsideFilters = ({ isOpen, close }) => {
  return (
    <Aside title="Filters" side="left" close={close} isActive={isOpen}>
      <Wrapper>
        <FiltersContent />
      </Wrapper>
    </Aside>
  );
};

AsideFilters.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

AsideFilters.defaultProps = {
  isOpen: false,
};

export default AsideFilters;
