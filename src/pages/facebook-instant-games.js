import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigTitle from '../components/BigTitle';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import Paragraph from '../components/Paragraph';

import bottomPlatformer from '../img/bottom-gdevelop-platformer-game.png';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredImage from '../components/BottomCenteredImage';
import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import facebookMessengerLogo from '../img/Facebook_Messenger_logo.svg';
import exportFacebookInstantGames from '../img/export-facebook-instant-games.png';
import gamesMessenger from '../img/games-messenger.png';
import facebookDevelopersApp from '../img/facebook-developers-app.png';
import CenteredImage from '../components/CenteredImage';
import MarkdownText from '../components/MarkdownText';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t(
                'Make your own Facebook Instant Games with GDevelop - publish your games on Messenger'
              )}
            >
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteBigTitle>
                {t('Make games for Facebook Messenger')}
              </WhiteBigTitle>
              <CenteredImage
                src={facebookMessengerLogo}
                alt="Facebook Messenger logo"
              />
              <WhiteParagraph>
                {t(
                  'With GDevelop, you can export your game as a Facebook Instant Game in 2 clicks.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>
                {t('1) Create your app on Facebook Developers')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'First thing, make sure to have an account on **Facebook Developers**. Create an app and configure it to choose "Games" as its category and enables Instant Games in Products:'
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={facebookDevelopersApp}
                alt="Create your app on Facebook Developers and set the category to Games"
              />
              <CenteredRow>
                <BigButton
                  to="https://developers.facebook.com/apps"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Go to Facebook Developers')}
                </BigButton>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing/publishing-to-facebook-instant-games"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Read the full tutorial')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>
                {t('2) Open GDevelop and export for Facebook Instant Games')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'In GDevelop, open your game and then the Export window. Choose **Facebook Instant Games**, click on Export and waiting a few seconds.'
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={exportFacebookInstantGames}
                alt="Export your game for Facebook Messenger in 2 clicks"
              />
              <CenteredRow>
                <BigButton to="/download">{t('Download GDevelop')}</BigButton>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing/publishing-to-facebook-instant-games#export-and-upload"
                  target="_blank"
                  rel="noopener"
                >
                  {t('More about exporting')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('3) Upload your game')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Go back to your game page on Facebook Developers, choose Web Hosting in the menu and **upload the file** that was exported by GDevelop.'
                  )}
                />
              </Paragraph>
              <Paragraph>
                {t(
                  'You can also add testers to let your friends try your game.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing/publishing-to-facebook-instant-games#export-and-upload"
                  target="_blank"
                  rel="noopener"
                >
                  {t('More about uploading your game')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('4) Try your game on Messenger')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Now, get your phone and **open messenger**. Open a conversation, choose Games and click on the icon of your game to start playing to it!'
                  )}
                />
              </Paragraph>
              <BottomCenteredImage
                maxWidth="300px"
                src={gamesMessenger}
                alt="GDevelop is a game maker software that can be used by anyone to create video games"
              />
              <BigTitle>
                {t('5) Use Instant Games features and publish your game!')}
              </BigTitle>
              <Paragraph>
                {t(
                  'GDevelop gave you access to Instant Games specific features, like the name of the player, to better integrate your game in Messenger conversations.'
                )}
              </Paragraph>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'When your game is ready, submit it for review by Facebook so that it becomes **available worldwide**!'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing/publishing-to-facebook-instant-games#export-and-upload"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Read the full step-by-step tutorial')}
                </BigButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredImage
              maxWidth="800px"
              src={bottomPlatformer}
              alt="GDevelop is a game maker software that can be used by anyone to create video games"
            />
            <MakeGameBanner
              title="Ready to make games for Messenger?"
              text="GDevelop is a game creator app that let you imagine your own games."
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
