import React from 'react';
import styled from 'styled-components';

import { Column, Columns } from '../src/components/bulma/Columns';
import { BmContainer } from '../src/components/bulma/Container';

import Credit from '../src/components/Credit';

const ContentWrapper = styled.div``;

const AppIcon = styled.img`
  border-radius: 16px;
  width: 80px;
`;

const SubTitle = styled.h3`
  padding: 0;
  margin: 8px 0;
  font-weight: 500;
`;

const Title = styled.h1`
  color: #53d769;
  padding: 0;
  margin: 10px 0;
`;

const Description = styled.p`
  line-height: 1.7rem;
  margin: 0;
  font-weight: 300;
`;

const MockImage = styled.img`
  width: 320px;
`;

const DownloadContainer = styled.div``;

const DownloadImage = styled.img`
  width: 150px;
`;

const Link = styled.a`
  display: inline-block;
  vertical-align: top;
  margin: 20px 0;
`;

const Index = () => (
  <ContentWrapper>
    <BmContainer options="is-fullwidth">
      <Columns options="is-vcentered">
        <Column options="has-text-centered">
          <MockImage src="static/assets/mock.png" />
        </Column>
        <Column options="has-text-centered has-text-left-tablet">
          <SubTitle>Random Dished Helper.</SubTitle>
          <AppIcon src="static/app-icons/icon@3x.png" />
          <Title>Gindee</Title>
          <Description>
            When you have no idea what to eat or where to eat. <br />
            Its easier to get some help. <br />
            This application will help you decide by random some dishes that are
            added by other users. <br />
            That mean you can explore new dishes and place that other people
            love to eat.
          </Description>
          <DownloadContainer>
            <Link
              href="https://itunes.apple.com/au/app/gindee/id1159732705?mt=8"
              target="_blank"
            >
              <DownloadImage src="static/assets/download.svg" />
            </Link>
          </DownloadContainer>
          <Credit />
        </Column>
      </Columns>
    </BmContainer>
  </ContentWrapper>
);

export default Index;
