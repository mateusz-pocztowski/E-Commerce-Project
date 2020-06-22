import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.level3};
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  width: 60px;
  height: 10px;
  margin: 0 8px;
  ${({ theme }) => theme.mq.lg} {
    margin: 20px;
  }
  background-color: ${({ theme }) => theme.white};
  opacity: ${({ isActive }) => (isActive ? '1' : '0.4')};
  border-radius: 50px;
  pointer-events: all;
  cursor: pointer;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.85;
  }
`;

export { Wrapper, Bar };
