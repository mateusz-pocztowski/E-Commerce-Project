import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Aside from 'components/molecules/Aside/Aside';
import EmptyCart from 'components/organisms/SideCart/EmptyCart';
import Summary from 'components/organisms/SideCart/Summary';
import CartItem from 'components/organisms/SideCart/CartItem';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: stretch;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${({ theme }) => theme.mq.xxs} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const ItemsWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
`;

const ItemsInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  overflow-x: hidden;
  padding: 20px 13px;
`;

const SideCart = ({ close, isActive }) => {
  const cartItems = useSelector(({ cart }) => cart);

  return (
    <Aside title="Shopping cart" side="right" close={close} isActive={isActive}>
      {cartItems.length === 0 ? (
        <EmptyCart closeCart={close} />
      ) : (
        <Content>
          <ItemsWrapper>
            <ItemsInnerWrapper>
              <AnimatePresence initial={false}>
                {cartItems.map(item => (
                  <motion.div
                    key={item.id}
                    positionTransition
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50, transition: { duration: 0.2 } }}
                  >
                    <CartItem item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </ItemsInnerWrapper>
          </ItemsWrapper>
          <Summary
            subtotal={cartItems
              .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
              .toFixed(2)}
          />
        </Content>
      )}
    </Aside>
  );
};

SideCart.propTypes = {
  close: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SideCart;
