import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import Link from './Link';
import { media } from '../lib/media';
import Row from './Grid/Row';
import Column from './Grid/Column';
import footerBackground from '../img/footer-background.jpg';
import config from '../config';

const FooterContainer = styled.div`
  background-color: #423352;
  background-image: url(${footerBackground});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
`;

const ContentContainer = styled.div`
  margin: auto;
  width: 720px;
  padding: 20px;
  background-color: rgba(66, 51, 82, 0.88);

  ${media.tablet`
    width: auto;
  `};
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 22px;
  font-family: 'Roboto', Arial, sans-serif;
  color: white;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const FooterLink = styled(Link)`
  font-size: 20px;
  color: #387eca;
  font-weight: 500;
  display: block;

  &:hover {
    color: #66ace3;
  }
`;

const FooterTitle = styled(Link)`
  font-size: 20px;
  opacity: 0.8;
  color: white
  font-weight: 600;
  display: block;

  &:hover {
    color: white;
  }
`;

const CopyrightText = styled.p`
  font-size: 16px;
  font-family: 'Roboto', Arial, sans-serif;
  color: white;
  margin-top: 10px;
`;

const CopyrightLink = styled.a`
  font-weight: bold;
  color: #387eca;

  &:hover {
    color: #66ace3;
  }
`;

export default ({ t }) => (
  <FooterContainer>
    <ContentContainer>
      <FooterText>
        {t(
          'GDevelop is an open-source game creator, tailored for fast and intuitive game making.'
        )}
      </FooterText>
      <Row>
        <Column>
          <FooterTitle>Get GDevelop</FooterTitle>
          <FooterLink to="/download/">{t('Download the editor')}</FooterLink>
          <FooterLink
            to={config.onlineEditorUrl}
            alt="_blank"
            rel="noopener"
            category="webapp"
            label="webapp"
          >
            {t('Online game editor')}
          </FooterLink>
          <FooterTitle>Learn</FooterTitle>
          <FooterLink to="/game-examples-starters">
            {t('Game examples/starters')}
          </FooterLink>
          <FooterLink
            to={config.wikiUrl}
            category="wiki"
            label="footer-documentation"
          >
            {t('Documentation')}
          </FooterLink>
          <FooterLink
            to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials"
            category="wiki"
            label="footer-tutorials"
          >
            {t('Tutorials')}
          </FooterLink>
          <FooterTitle>Community</FooterTitle>
          <FooterLink
            to={config.forumUrl}
            category="forum"
            label="footer-community-forum"
          >
            {t('Community forums')}
          </FooterLink>
          <FooterLink to="/contribute">{t('Contribute')}</FooterLink>
          <FooterLink
            to={config.facebookPageUrl}
            category="facebook"
            label="footer-facebook-page"
          >
            {t('Facebook page')}
          </FooterLink>
          <FooterLink
            to={config.twitterUrl}
            category="twitter"
            label="footer-twitter-page"
          >
            {t('Twitter')}
          </FooterLink>
          <FooterLink to="/choose-language" noLangPathPrefix>
            <FontAwesomeIcon icon={faLanguage} />{' '}
            {t('This website in your language')}
          </FooterLink>
        </Column>
        <Column>
          <FooterTitle>Features</FooterTitle>
          <FooterLink to="/features">{t('All GDevelop Features')}</FooterLink>
          <FooterLink to="/extensions-and-sharing">
            {t('Install new features with extensions')}
          </FooterLink>
          <FooterLink to="/facebook-instant-games">
            {t('Facebook Instant Games')}
          </FooterLink>
          <FooterLink to="/javascript-game-engine">
            {t('Use JavaScript with the game engine')}
          </FooterLink>
          <FooterLink to="/ads-in-your-game-with-admob">
            {t('Ads with AdMob')}
          </FooterLink>
          <FooterLink to="/custom-behaviors">
            {t('Create custom behaviors')}
          </FooterLink>
          <FooterLink to="/game-editors">{t('Game editors')}</FooterLink>
          <FooterTitle>Use Cases</FooterTitle>
          <FooterLink to="/games-showcase">{t('Games showcase')}</FooterLink>
          <FooterLink to="/game-jams">{t('GDevelop for Game jams')}</FooterLink>
          <FooterLink to="/education">{t('GDevelop for Education')}</FooterLink>
          <FooterLink to="/make-8bit-pixelart-games">
            {t('Make 8-bit games')}
          </FooterLink>
        </Column>
      </Row>
      <CopyrightText>
        {t('GDevelop was created with love by')}{' '}
        <CopyrightLink
          href="https://www.linkedin.com/in/florianrival/"
          category="florian-rival"
          label="footer-name"
        >
          Florian Rival
        </CopyrightLink>
      </CopyrightText>
      <CopyrightText>
        {t('Thanks to the')}{' '}
        <CopyrightLink
          href="https://github.com/4ian/GD/graphs/contributors/"
          category="github"
          label="footer-contributors"
        >
          {t('contributors')}
        </CopyrightLink>{' '}
        {t(
          'who added features, fixed bugs, sent new examples, wrote tutorials, and helped the community.'
        )}
      </CopyrightText>
    </ContentContainer>
  </FooterContainer>
);
