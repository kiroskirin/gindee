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

const Video = styled.video`
  padding: 50px;

  /* 5... */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    padding: 45px;
  }

  /* 6,7,8 */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    padding: 50px;
  }

  /* 6,7,8 plus */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    padding: 60px !important;
  }

  /* x */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    padding: 54px;
  }

  /* Portrait */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 125px;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 52px;
  }
`;

const VideoContainer = styled.div`
  background: ${`url('static/assets/mock.png')`} center no-repeat;
  background-size: contain;
`;

const Index = () => (
  <ContentWrapper>
    <BmContainer options="is-fullwidth">
      <Columns options="is-vcentered">
        <Column options="has-text-centered">
          <VideoContainer>
            <Video autoPlay loop muted playsInline>
              <source src="static/video.mp4" type="video/mp4" />
              <source src="static/video.webm" type="video/webm" />
            </Video>
          </VideoContainer>
        </Column>
        <Column options="is-two-thirds has-text-centered has-text-left-tablet">
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
