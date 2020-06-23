import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import Accordion from 'components/organisms/Footer/Accordion';
import {
  aboutLinks,
  servicesLinks,
  infoLinks,
} from 'components/organisms/Footer/links';

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.dark100};
  color: ${({ theme }) => theme.gray100};
  font-size: ${({ theme }) => theme.fontSize.xsm};
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 15px 15px 0;
  ${({ theme }) => theme.mq.md} {
    padding: 20px 30px 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

const StyledSocialMedia = styled(SocialMedia)`
  margin-right: 10px;
  &:hover {
    filter: brightness(200%);
  }
`;

const RightsWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #303030;
`;

const Rights = styled.span`
  margin: 0 auto;
  ${({ theme }) => theme.mq.sm} {
    margin: 0;
  }
`;

const RightsLinksWrapper = styled.div`
  display: none;
  margin-left: auto;
  ${({ theme }) => theme.mq.md} {
    display: block;
  }
`;

const RightsLink = styled(Link)`
  color: ${({ theme }) => theme.gray100};
  transition: 0.15s;
  margin-left: 15px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <Content>
          <Accordion
            active={width >= 768}
            title="About Us"
            links={aboutLinks}
          />
          <Accordion
            active={width >= 768}
            title="Our Services"
            links={servicesLinks}
          />
          <Accordion
            active={width >= 768}
            title="Information"
            links={infoLinks}
          />
          <SocialMediaWrapper>
            <StyledSocialMedia type="twitter" />
            <StyledSocialMedia type="facebook" />
            <StyledSocialMedia type="instagram" />
          </SocialMediaWrapper>
        </Content>
        <RightsWrapper>
          <Rights>&copy; 2020 Shopmax - All Rights Reserved</Rights>
          <RightsLinksWrapper>
            <RightsLink to="/">Terms of Sale</RightsLink>
            <RightsLink to="/">Terms of Use</RightsLink>
            <RightsLink to="/">Privacy Policy</RightsLink>
          </RightsLinksWrapper>
        </RightsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
