import styled from 'styled-components';

const PageOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(11, 11, 11, 0.5);
  z-index: ${({ theme }) => theme.zIndex.level7};
  overflow: hidden;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: 0.3s all ease;
`;

export default PageOverlay;
