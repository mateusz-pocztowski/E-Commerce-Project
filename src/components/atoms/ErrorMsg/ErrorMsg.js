import styled from 'styled-components';

const ErrorMsg = styled.div`
  position: absolute;
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  bottom: -27px;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.dark300};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.white};
  transition: 0.2s;
`;

export default ErrorMsg;
