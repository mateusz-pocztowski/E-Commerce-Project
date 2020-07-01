import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import deleteIcon from 'assets/icons/bin.svg';
import QuantityField from 'components/molecules/QuantityField/QuantityField';
import ErrorMsg from 'components/atoms/ErrorMsg/ErrorMsg';
import useCart from 'hooks/useCart';

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  border: 1px solid #ddd;
  ${({ theme }) => theme.mq.lg} {
    flex-direction: row;
    padding: 28px 0;
    margin: 0;
    border: none;
    border-bottom: 1px solid #ddd;
  }
`;

const ImageWrapper = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Main = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  ${({ theme }) => theme.mq.lg} {
    flex-basis: 50%;
    border: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px 0 12px;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.medium};
`;

const Name = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.dark};
  margin: 0;
  padding-right: 15px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.xsm};
`;

const Size = styled.span`
  margin: 10px 0;
  color: ${({ theme }) => theme.gray100};
`;

const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  background: url(${deleteIcon}) no-repeat center;
  background-size: 100%;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  ${({ theme }) => theme.mq.md} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xsm};
  max-height: 60px;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border: none;
  }
  ${({ theme }) => theme.mq.md} {
    border: none;
  }
  ${({ theme }) => theme.mq.xl} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const QuantityWrapper = styled.div`
  position: relative;
`;

const Detail = styled.div`
  color: ${({ theme }) => theme.gray};
  font-weight: ${({ theme, bold }) => bold && theme.semiBold};
`;

const FullCartItem = ({ item }) => {
  const [isErrorVisible, { removeItem, handleAdd, handleSubtract }] = useCart(
    item,
  );

  const { id, name, image, size, price, quantity } = item;

  return (
    <ProductItem>
      <Main>
        <ImageWrapper to={`/catalog/${id}`}>
          <Image src={image} />
        </ImageWrapper>
        <Content>
          <Name to={`/catalog/${id}`}>{name}</Name>
          <Size>Size: {size.toUpperCase()}</Size>
          <DeleteButton onClick={removeItem} />
        </Content>
      </Main>
      <InnerWrapper>
        <Section>
          <Detail>${price}</Detail>
        </Section>
        <Section>
          <QuantityWrapper>
            <QuantityField
              add={handleAdd}
              subtract={handleSubtract}
              value={quantity}
            />
            <ErrorMsg active={isErrorVisible}>Product limit reached!</ErrorMsg>
          </QuantityWrapper>
        </Section>
        <Section>
          <Detail bold>${(price * quantity).toFixed(2)}</Detail>
        </Section>
      </InnerWrapper>
    </ProductItem>
  );
};

FullCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
};

export default FullCartItem;
