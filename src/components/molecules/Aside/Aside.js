import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import closeIcon from 'assets/icons/delete.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import PageOverlay from 'components/molecules/PageOverlay/PageOverlay';
import useDetectOutsideClick from 'hooks/useDetectOutsideClick';

const SidenavWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  ${({ side }) => side}: -100vw;
  width: 100vw;
  top: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.level9};
  visibility: hidden;
  opacity: 0;
  height: 100vh;
  overflow: auto;
  will-change: transform;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 2px 0 10px rgba(54, 54, 54, 0.2),
    -2px 0 10px rgba(54, 54, 54, 0.2);
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
  ${({ theme }) => theme.mq.xxs} {
    width: calc(100vw - 65px);
    ${({ side }) => side}: calc((100vw - 65px) * -1);
  }
  ${({ theme }) => theme.mq.xs} {
    width: 340px;
    ${({ side }) => side}: -340px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible !important;
      opacity: 1 !important;
      ${({ side }) => side}: 0 !important;
    `}
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const StyledHeading = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.medium};
`;

const CloseBtn = styled(ButtonIcon)`
  filter: brightness(3);
  background-size: 60%;
  transition: transform 0.35s ease;
  &:hover {
    transform: rotate(180deg);
  }
`;

const BarWrapper = styled.div`
  height: 2px;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.blue50};
`;

const Aside = ({
  title,
  children,
  isActive,
  isBarActive,
  barDuration,
  close,
  side,
}) => {
  const AsideRef = useRef(null);
  useDetectOutsideClick(AsideRef, close);

  useEffect(() => {
    if (isActive) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isActive]);

  return (
    <PageOverlay isActive={isActive}>
      <SidenavWrapper ref={AsideRef} isActive={isActive} side={side}>
        <HeadingWrapper>
          <StyledHeading>{title}</StyledHeading>
          <CloseBtn icon={closeIcon} onClick={close} />
        </HeadingWrapper>
        <BarWrapper>
          <ProgressBar
            mini
            isActive={isActive && isBarActive}
            duration={barDuration}
          />
        </BarWrapper>
        {children}
      </SidenavWrapper>
    </PageOverlay>
  );
};

Aside.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  isBarActive: PropTypes.bool,
  barDuration: PropTypes.number,
};

Aside.defaultProps = {
  isActive: false,
  isBarActive: false,
  barDuration: 0,
};

export default Aside;
