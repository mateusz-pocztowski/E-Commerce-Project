import React from 'react';
import styled from 'styled-components';
import defaultImg from 'assets/images/defaultImg.jpg';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import UserTemplate from 'templates/UserTemplate';
import AddForm from 'components/molecules/AddItemModal/AddForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 40px;
  color: ${({ theme }) => theme.dark300};
`;

const ImageWrapper = styled.div`
  max-width: 500px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.2);
  border: 1px solid #eaeaea;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin: 15px 0 8px;
`;

const Price = styled.div`
  margin: 0;
  font-weight: ${({ theme }) => theme.medium};
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const CategoryWrapper = styled.div`
  margin: 20px 0 12px;
`;

const Category = styled.span`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  padding: 8px 20px;
`;

const Description = styled.div`
  margin: 25px 0;
  line-height: 1.25;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.gray};
  max-width: 700px;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const DetailsTemplate = ({ productData }) => {
  const { name, description, category, image, price } = productData;

  return (
    <UserTemplate>
      <Wrapper>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <StyledHeading>{name}</StyledHeading>
        <Price>${price}</Price>
        <CategoryWrapper>
          <Category>{category}</Category>
        </CategoryWrapper>
        <Description>{description}</Description>
        <AddForm itemData={productData} />
      </Wrapper>
    </UserTemplate>
  );
};
DetailsTemplate.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

DetailsTemplate.defaultProps = {
  productData: PropTypes.shape({
    id: null,
    price: null,
    image: defaultImg,
  }),
};

export default DetailsTemplate;
