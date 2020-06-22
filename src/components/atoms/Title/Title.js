import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  ${({ theme }) => theme.mq.sm} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  white-space: pre-line;
  line-height: 1.1;
  &::after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.blue100};
  }
`;

export default Title;
