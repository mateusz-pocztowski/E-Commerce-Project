import styled, { css } from 'styled-components';
import searchIcon from 'assets/icons/search-black.svg';

const Input = styled.input`
  width: 100%;
  min-width: 220px;
  padding: 15px 30px;
  border: none;
  font-weight: ${({ theme }) => theme.regular};
  transition: 0.2s;
  border-bottom: 1px solid ${({ theme }) => theme.gray100};
  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${icon});
      background-size: 15px;
      background-position: 8px 50%;
      background-repeat: no-repeat;
      padding: 15px 35px;
    `}
  ${({ icon }) =>
    icon === 'search' &&
    css`
      background-position: 15px 50%;
      background-image: url(${searchIcon});
      padding: 15px 20px 15px 40px;
      border-radius: 5px;
      border: 1px solid #ddd;
    `}
`;

export default Input;
