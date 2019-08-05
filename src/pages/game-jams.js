import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigTitle from '../components/BigTitle';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteHugeTitle from '../components/WhiteHugeTitle';
import WhiteParagraph from '../components/WhiteParagraph';

import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import Paragraph from '../components/Paragraph';
import chromeWithGame from '../img/chrome-with-game.png';
import MakeGameBanner from '../components/MakeGameBanner';
import MarkdownText from '../components/MarkdownText';
import BottomCenteredImage from '../components/BottomCenteredImage';
import CenteredImage from '../components/CenteredImage';
import lilBubPlatformer from '../img/games/lil-bub-hello-earth/lil-bub-platformer.png';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title={t('Make games for Game jams')}>
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('Game jams')}</WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is a perfect fit for quickly making games during game jams.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>{t('Make your assets with Piskel')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'GDevelop is bundled with **Piskel**, a sprite editor that is perfect to quickly draw your sprites and for pixel-art.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton to="/make-8bit-pixelart-games/">
                  {t('Read more about making 8-bit and pixelart games')}
                </BigButton>
              </CenteredRow>
              <BigTitle>{t('Generate sounds effects in one click')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'GDevelop has an integrated sound effect generator, **Jfxr**. You can create sounds effects like explosions, jump, coins, power ups in a single click and customize them as you wish.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="/features">
                  {t('Read about all features available in GDevelop')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={lilBubPlatformer}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <BigTitle>{t('Ready-made behaviors')}</BigTitle>
              <Paragraph>
                {t(
                  'Want to create a retro platformer game? GDevelop has a pre-made behaviors that you can attach to your character and your platforms. In a few seconds you have a basic platformer game running and ready to be customized and enhanced! Other behaviors, conditions and actions can also be used to create any kind of 2D games: shmup, "Bullet Hell", arcade games...'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="/features">
                  {t('Learn more about behaviors')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Events editor')}</BigTitle>
              <Paragraph>
                {t(
                  "Imagining and creating the rules of your game do not imply to learn the syntax of a complex programming language. The events editor displays a sheet of events: each events is composed of conditions and actions. When conditions are fulfilled, actions are run. It's that simple."
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials">
                  {t('Learn more about events in the tutorials')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredImage
              src={chromeWithGame}
              alt="Make HTML5 games for Chrome, Firefox, Safari, iOS, Android, Edge and other modern browsers"
            />
            <MakeGameBanner title="Ready to unleash your creativity?" />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
