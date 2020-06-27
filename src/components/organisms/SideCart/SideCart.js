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
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: stretch;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${({ theme }) => theme.mq.xxs} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.white100T};
    z-index: ${({ theme }) => theme.zIndex.level8};
    visibility: ${({ isOverlayActive }) =>
      isOverlayActive ? 'visible' : 'hidden'};
    opacity: ${({ isOverlayActive }) => (isOverlayActive ? '1' : '0')};
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

const SideCart = ({ close, isActive, isBarActive, barDuration }) => {
  const cartItems = useSelector(({ cart }) => cart);

  return (
    <Aside
      barDuration={barDuration}
      isBarActive={isBarActive}
      title="Shopping cart"
      side="right"
      close={close}
      isActive={isActive}
    >
      {cartItems.length === 0 ? (
        <EmptyCart closeCart={close} />
      ) : (
        <Content isOverlayActive={isBarActive}>
          <ItemsWrapper>
            <ItemsInnerWrapper>
              <AnimatePresence initial={false}>
                {cartItems.map(item => (
                  <motion.div
                    key={item.id + item.size}
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
            closeCart={close}
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
  isBarActive: PropTypes.bool.isRequired,
  barDuration: PropTypes.number.isRequired,
};

export default SideCart;
