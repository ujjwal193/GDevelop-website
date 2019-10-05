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

import CenteredYoutubeVideo from '../components/CenteredYoutubeVideo';
import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import Paragraph from '../components/Paragraph';
import ExplanationText from '../components/ExplanationText';
import MakeGameBanner from '../components/MakeGameBanner';
import MarkdownText from '../components/MarkdownText';
import lilBubPlatformer from '../img/games/lil-bub-hello-earth/lil-bub-platformer.png';
import lilBubShooter from '../img/games/lil-bub-hello-earth/lil-bub-shooter.png';
import CenteredImage from '../components/CenteredImage';
import Spacer from '../components/Grid/Spacer';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title={t('Make your own 8-bit and pixelart games')}>
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>
                {t('Make 8-bit and pixelart games')}
              </WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'Sprite editor and tools to make your own 8bit games with GDevelop'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/iBWXvvgQ_-g" />
              <ExplanationText>
                {t(
                  'See Piskel sprite editor being used inside GDevelop to make a 8bit game'
                )}
              </ExplanationText>
              <BigTitle>{t('Piskel sprite editor')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "GDevelop is bundled with [Piskel](https://www.piskelapp.com/), a powerful and easy to use 2D sprite editor. It's the perfect tool to create pixel art assets to give a retro feeling to your game! You can create objects with multiple animations, edit at any time the sprites and see the result by launching a preview of your game."
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton to="/download">
                  {t('Download GDevelop to try Piskel')}
                </BigButton>
              </CenteredRow>
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
              <CenteredImage
                maxWidth="800px"
                src={lilBubPlatformer}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />

              <BigTitle>
                {t("Lil BUB's HELLO EARTH: a 8 bit game made with GDevelop ")}
              </BigTitle>
              <Paragraph>
                {t(
                  "Lil BUB's HELLO EARTH is a retro 8-bit game, with beautiful arts and soundtrack, which alternates between platformers levels, with hidden secrets, and shooter levels with bosses, multiple enemies and bonuses."
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton to="/games/lil-bub-hello-earth">
                  {t("Read more about Lil BUB's game")}
                </BigButton>
                <BigGhostButton to="/games-showcase/">
                  {t('See other games made with GDevelop')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={lilBubShooter}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />
            </TransparentContainer>
            <Spacer height="25px" />
            <MakeGameBanner />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
