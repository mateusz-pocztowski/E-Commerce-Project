import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.dark};
  text-transform: uppercase;
  border-radius: 50px;
  padding: 20px 40px;
  pointer-events: all;
  transition: 0.3s;
  text-decoration: none;
  ${({ theme }) => theme.mq.md} {
    padding: 20px 54px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  ${({ theme }) => theme.mq.lg} {
    padding: 22px 64px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      margin: 10px auto;
      width: 100%;
      text-transform: none;
      border: 2px solid ${({ theme }) => theme.dark};
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.white};
      padding: 17px 32px !important;
      &:hover {
        border-color: ${({ theme }) => theme.blue};
      }
    `}
`;

export default Button;
