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
import CenteredRow from '../components/Grid/CenteredRow';
import Paragraph from '../components/Paragraph';
import MakeGameBanner from '../components/MakeGameBanner';
import MarkdownText from '../components/MarkdownText';

import { renderWebMonetizationMeta } from '../lib/WebMonetization';
import CenteredYoutubeVideo from '../components/CenteredYoutubeVideo';

export default class LivePreviewAndNetworkPreview extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {(t) => (
          <React.Fragment>
            <Helmet
              title={t(
                'Super fast game development with Live Preview (Hot reload) and Network Preview (Preview over Wifi/LAN)'
              )}
            >
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
              <WhiteHugeTitle>
                {t('Live Preview and Preview over Wifi/LAN')}
              </WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'Achieve super fast game development with Live Preview and previews on your external devices.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>
                {t(
                  'Live Preview: get your changes applied to your game while playing it'
                )}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Live Preview, also called *hot reloading*, is applying your changes to your game preview, without having to restart it. Design your level, change some events, add new objects, modify visual effects, then click on a button and the game preview will be updated automatically.'
                  )}
                />
              </Paragraph>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/OSOLiUtPzRQ?autoplay=1&modestbranding=1&loop=1" />
              <Paragraph>
                <MarkdownText
                  source={t(
                    "To start using Live Preview, just launch a preview as usual. When the preview is running, go back to the editor, do some changes and press the Preview button again. That's it!"
                  )}
                />
              </Paragraph>
            </TransparentContainer>
            <TransparentContainer>
              <BigTitle>
                {t(
                  'Network Preview: preview your game instantly on other devices'
                )}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "Live Preview also works with the *Network Preview*. With the Network Preview, also called *Preview over WiFi/LAN*, you can try your game on your phone, tablet or even on other computer browsers - without having to export them. It's useful to quickly validate the gameplay on smaller devices, verify the game performance and try the game. "
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/interface/preview">
                  {t('Learn how to run previews in GDevelop')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/ByouBpwzBOQ?autoplay=1&modestbranding=1&loop=1" />
            </TransparentContainer>
            <MakeGameBanner title={t('Game making at lightning speed')} />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
