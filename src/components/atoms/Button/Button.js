import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
  text-decoration: none;
  text-align: center;
  border-radius: 50px;
  padding: 20px 40px;
  pointer-events: all;
  transition: 0.3s;
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
  ${({ submit }) =>
    submit &&
    css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        border: 3px solid ${({ theme }) => theme.white};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-radius: 50%;
        opacity: ${({ disabled }) => (disabled ? '1' : '0')};
        animation: ${spin} 1s ease infinite;
      }
    `}
`;

export default Button;
