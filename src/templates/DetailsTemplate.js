import React, { useContext } from 'react';
import styled from 'styled-components';
import defaultImg from 'assets/images/defaultImg.jpg';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import UserTemplate, { Title } from 'templates/UserTemplate';
import GridTemplate from 'templates/GridTemplate';
import AddForm from 'components/molecules/AddItemModal/AddForm';
import { useSelector } from 'react-redux';
import { NavigationContext } from 'context/NavigationContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 40px;
  color: ${({ theme }) => theme.dark300};
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
  }
`;

const InnerWrapper = styled.div`
  ${({ theme }) => theme.mq.md} {
    padding: 15px 0;
  }
`;

const ImageWrapper = styled.div`
  max-width: 768px;
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid #eaeaea;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin: 15px 0 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.md} {
    padding: 0 25px;
  }
  ${({ theme }) => theme.mq.xl} {
    padding: 0 40px;
  }
`;

const Price = styled.div`
  margin: 0;
  font-weight: ${({ theme }) => theme.medium};
  ${({ theme }) => theme.mq.lg} {
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
  margin: 25px 0 0;
  line-height: 1.25;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.gray};
  max-width: 700px;
  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const SectionWrapper = styled.div`
  margin: 30px 0 60px;
  border-top: 1px solid #ddd;
`;

const StyledTitle = styled(Title)`
  margin: 25px 0;
  text-align: center;
  text-transform: none;
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.dark300};
  ${({ theme }) => theme.mq.lg} {
    margin: 40px 0;
  }
`;

const DetailsTemplate = ({ productData }) => {
  const { name, description, category, image, price } = productData;
  const { openSideCart } = useContext(NavigationContext);

  const featuredItems = useSelector(({ featured }) =>
    featured.sort(() => Math.random() - 0.5).slice(0, 4),
  );
  return (
    <UserTemplate>
      <Wrapper>
        <InnerWrapper>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
        </InnerWrapper>
        <ContentWrapper>
          <StyledHeading>{name}</StyledHeading>
          <Price>${price}</Price>
          <CategoryWrapper>
            <Category>{category}</Category>
          </CategoryWrapper>
          <Description>{description}</Description>
          <AddForm onFinishFunc={openSideCart} itemData={productData} />
        </ContentWrapper>
      </Wrapper>
      <SectionWrapper>
        <StyledTitle>You may also like</StyledTitle>
        <GridTemplate explicit products={featuredItems} isWide />
      </SectionWrapper>
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
