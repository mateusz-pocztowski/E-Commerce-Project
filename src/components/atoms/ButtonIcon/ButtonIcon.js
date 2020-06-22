import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 25px;
  height: 25px;
  transition: 0.3s ease-in-out;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  cursor: pointer;
  filter: invert(1);
`;

export default ButtonIcon;
