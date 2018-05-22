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

import CenteredYoutubeVideo from '../components/CenteredYoutubeVideo';
import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import Paragraph from '../components/Paragraph';
import ExplanationText from '../components/ExplanationText';
import config from '../config';
import chromeWithGame from '../img/chrome-with-game.png';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredBigImage from '../components/BottomCenteredBigImage';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t(
                'All editors of GDevelop - make platformer, shooter, rpg, action games...'
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
              <WhiteBigTitle>{t('The game editors')}</WhiteBigTitle>
              <WhiteParagraph>
                {t(
                  'The interface of GDevelop is made of intuitive editors to design your own games from scratch.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/3wwoy1pY6O8" />
              <ExplanationText>
                {t(
                  'See how to use GDevelop to add a trigger in your game in 90 seconds'
                )}
              </ExplanationText>
              <BigTitle>{t('Scene editor')}</BigTitle>
              <Paragraph>
                {t(
                  'Design your own levels with the scene editor: you can choose objects, put them on the scene, adjust their position and size. You can entirely design your levels with the scene editor. If you want to create complex levels or interfaces, the external layouts allow you to create parts of a level and then reuse them in other scenes.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.onlineEditorUrl}>
                  {t('Get started in 2 minutes: Try GDevelop in your browser')}
                </BigButton>
              </CenteredRow>
              <BigTitle>{t('Events editor')}</BigTitle>
              <Paragraph>
                {t(
                  "Imagining and creating the rule of your game does not imply to learn the syntax of a complex programming language. The events editor displays a sheet of events: each events is composed of conditions and actions. When conditions are fulfilled, actions are run. It's that simple."
                )}
              </Paragraph>
              <Paragraph>
                {t(
                  'All conditions and actions are available in a list so you can easily discover and find what you want to make the rules of your game.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials">
                  {t('Learn more about events in the tutorials')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Objects editors')}</BigTitle>
              <Paragraph>
                {t(
                  'Everything that is displayed on the screen of your game is an object. Most objects are called sprites: they are composed of animations and can be used for any animated element. For example, your player, enemies or bonuses to pick.'
                )}
              </Paragraph>
              <Paragraph>
                {t(
                  'Other object are also available to create interfaces or add effects to your game: texts, particles, tiled sprites...'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="/features">
                  {t('Discover all the objects available in GDevelop')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Resources editor')}</BigTitle>
              <Paragraph>
                {t(
                  "All the images and audio files used in your game are listed in the Resources Editor. It's a simple way to manage your game assets."
                )}
              </Paragraph>
              <Paragraph>
                {t(
                  'GDevelop comes bundled with free assets to get you started! To quickly prototype and create your own assets, GDevelop is also bundled with a powerful pixel art editor called Piskel.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/interface">
                  {t('Learn everything about the editors in the documentation')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredBigImage
              src={chromeWithGame}
              alt="Make HTML5 games for Chrome, Firefox, Safari, iOS, Android, Edge and other modern browsers"
            />
            <MakeGameBanner />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
