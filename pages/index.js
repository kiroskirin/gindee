import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

const Image = styled.img`
  margin: 8px;
`;

const Title = styled.h3`
  color: tomato;
`;

const Index = () => (
  <ContentWrapper>
    <ContentContainer>
      <Image src="static/assets/react-icon.svg" />
      <Title>Hello Next.js</Title>
    </ContentContainer>
  </ContentWrapper>
);

export default Index;
