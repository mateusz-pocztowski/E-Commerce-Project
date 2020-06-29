import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import defaultImg from 'assets/images/defaultImg.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
`;

const Description = styled.div`
  width: 100%;
  padding: 13px 0;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: none;
`;

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledSkeleton = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
  height: 100%;
`;

const SkeletonCard = () => {
  return (
    <Wrapper>
      <Overlay>
        <StyledSkeleton width="100%" height="100%" />
        <Image src={defaultImg} />
      </Overlay>
      <Description>
        <InnerWrapper>
          <Skeleton width={170} />
          <Skeleton circle height={30} width={30} />
        </InnerWrapper>
        <Skeleton width="30%" />
      </Description>
    </Wrapper>
  );
};

export default SkeletonCard;
