import React from 'react';
import Aside from 'components/molecules/Aside/Aside';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FiltersContent from './FiltersContent';

const Wrapper = styled.div`
  padding: 20px;
`;

const Filters = ({ isOpen, close, priceRange, priceHandler, applyFilters }) => {
  return (
    <Aside
      barDuration={0}
      isBarActive
      title="Filters"
      side="left"
      close={close}
      isActive={isOpen}
    >
      <Wrapper>
        <FiltersContent
          applyFilters={applyFilters}
          priceHandler={priceHandler}
          priceRange={priceRange}
        />
      </Wrapper>
    </Aside>
  );
};

Filters.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  priceRange: PropTypes.objectOf(PropTypes.number).isRequired,
  close: PropTypes.func.isRequired,
  priceHandler: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
};

export default Filters;
