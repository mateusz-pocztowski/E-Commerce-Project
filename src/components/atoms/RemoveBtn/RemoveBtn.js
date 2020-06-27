import styled from 'styled-components';
import deleteIcon from 'assets/icons/delete.svg';

const RemoveBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  display: block;
  background: url(${deleteIcon}) no-repeat center;
  border-radius: 50%;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(500%);
  }
`;

export default RemoveBtn;
