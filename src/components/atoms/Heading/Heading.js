import styled from 'styled-components';

const Heading = styled.h2`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  max-width: 270px;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.l};
    max-width: 380px;
  }
  font-weight: ${({ theme }) => theme.semiBold};
`;

export default Heading;
