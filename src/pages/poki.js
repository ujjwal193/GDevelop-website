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
import Paragraph from '../components/Paragraph';

import bottomSpaceShooter from '../img/bottom-gdevelop-space-shooter-game.png';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredImage from '../components/BottomCenteredImage';
import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import pokiLogo from '../img/poki.png';
import pokiHomepage from '../img/poki-homepage.png';
import CenteredImage from '../components/CenteredImage';
import MarkdownText from '../components/MarkdownText';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {(t) => (
          <React.Fragment>
            <Helmet title={t('Your GDevelop game on the Poki web platform')}>
              <html lang={this.props.pageContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('Join the Poki web platform')}</WhiteHugeTitle>
              <CenteredImage maxWidth="290px" src={pokiLogo} alt="Poki logo" />
              <WhiteParagraph>
                {t(
                  'Get an audience of 30 million gamers from all over the world for your game.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>
                {t('Discover what Poki can do for your game')}
              </BigTitle>
              <CenteredImage
                maxWidth="800px"
                src={pokiHomepage}
                alt="Poki.com homepage showing case video games"
              />
              <Paragraph>
                <MarkdownText
                  source={t(
                    '[Poki.com](https://poki.com/) is a curated discovery platform for free, high-quality online games. Reach hundred of millions of players around the globe and get a lifetime revenue share from advertising when your game is played.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton
                  to="https://poki.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Browse games on Poki.com')}
                </BigButton>
                <BigGhostButton
                  to="https://developers.poki.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Poki Developers page')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Export your game as an HTML5 game')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'From GDevelop, choose to [export your game as HTML5](http://wiki.compilgames.net/doku.php/gdevelop5/publishing/html5_game_in_a_local_folder). The result is a web game, running with WebGL, that can be played on any recent desktop and mobile browser.'
                  )}
                />
              </Paragraph>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'In GDevelop, open your game and then the Export window. Choose **Local folder**, click on Export and wait a few seconds to get your game ready.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing/html5_game_in_a_local_folder"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Export your game as HTML5')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Submit your game on Poki')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'On the developer page of Poki.com, get in touch with Poki team or directly submit your game. Use [GDevelop JavaScript features](/javascript-game-engine) to integrate their lightweight SDK. When your game is published on Poki, get real-time insights into how your game is doing and support from their tech team.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton
                  to="https://developers.poki.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Submit your game on Poki')}
                </BigButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredImage
              maxWidth="800px"
              src={bottomSpaceShooter}
              alt="Make indie HTML5 games with GDevelop"
            />
            <MakeGameBanner
              title="Ready to make web games for Poki?"
              text="GDevelop is a powerful game development tool for building web games."
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
