import React from 'react';
import styled from 'styled-components';
import FullCartItem from 'components/organisms/FullCart/FullCartItem';
import FullCartHeader from 'components/organisms/FullCart/FullCartHeader';
import FullCartSummary from 'components/organisms/FullCart/FullCartSummary';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled.div`
  padding: 25px 0 50px;
  ${({ theme }) => theme.mq.lg} {
    padding: 50px 0;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartTemplate = ({ cartItems }) => (
  <Wrapper>
    <FullCartHeader />
    <ProductList>
      <AnimatePresence initial={false}>
        {cartItems.map(item => (
          <motion.div
            key={item.id + item.size}
            positionTransition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <FullCartItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </ProductList>
    <FullCartSummary
      subtotal={cartItems
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2)}
    />
  </Wrapper>
);

CartTemplate.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartTemplate;
