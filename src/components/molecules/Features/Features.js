import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Features/Card';
import deliveryIcon from 'assets/icons/truck.svg';
import supportIcon from 'assets/icons/call.svg';
import returnIcon from 'assets/icons/box.svg';
import saleIcon from 'assets/icons/sale.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  ${({ theme }) => theme.mq.xl} {
    flex-wrap: nowrap;
  }
`;

const Features = () => (
  <Wrapper>
    <Card
      icon={deliveryIcon}
      title="Fast Delivery"
      subTitle="Shall open divide one"
    />
    <Card
      icon={supportIcon}
      title="Support 24/7"
      subTitle="Shall open divide one"
    />
    <Card
      icon={returnIcon}
      title="Free Returns"
      subTitle="Shall open divide one"
    />
    <Card icon={saleIcon} title="Up to 40%" subTitle="Shall open divide one" />
  </Wrapper>
);

export default Features;
