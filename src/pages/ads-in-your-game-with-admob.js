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
import MakeGameBanner from '../components/MakeGameBanner';
import MarkdownText from '../components/MarkdownText';
import CenteredImage from '../components/CenteredImage';
import exportAndroid from '../img/export-android.png';
import googleAdmobLogo from '../img/google-admob-logo.png';
import setupAdmobAppid from '../img/setup-admob-appid.png';
import createAdmobApp from '../img/create-admob-app.png';
import displayAdmobBannerEvents from '../img/display-admob-banner-events.png';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title={t('Add ads to your game with AdMob')}>
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('Ads with AdMob')}</WhiteHugeTitle>
              <CenteredImage src={googleAdmobLogo} alt="AdMob logo" />
              <WhiteParagraph>
                {t(
                  'Use AdMob in your GDevelop games to display ads and reward videos to your players'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>{t('1) Create your AdMob account')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Go to [AdMob website](https://www.google.com/admob/) and create an account. Then, create a new app from the Admob interface and an ad unit. Note the identifiers for both the app and the ad unit, as they will be used in your game.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/all-features/admob">
                  {t('Read the detailed instructions')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={createAdmobApp}
                alt="Create an app and an ad unit in AdMob"
              />
              <BigTitle>{t('2) Configure AdMob in GDevelop')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'In GDevelop, open the properties of your game and paste the AdMob **app id**. This will be identified to use your application for AdMob to deliver ads.'
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={setupAdmobAppid}
                alt="Set up AdMob app id in GDevelop"
              />
              <BigTitle>{t('3) Trigger ads display from events')}</BigTitle>
              <Paragraph>
                {t(
                  'Add events in your game to load and show the ad when needed (this can be when a level is successfully completed for example). Paste in the parameters of the action the ad unit identifier. You can also enter "test" for loading a test ad.'
                )}
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={displayAdmobBannerEvents}
                alt="Add events to display AdMob ads."
              />
              <BigTitle>{t('4) Publish your game on Android')}</BigTitle>
              <Paragraph>
                {t(
                  'You can test and publish your game on Android directly from GDevelop. In the editor, open your game and then the Export window. Choose Android, click on Export and wait a few minutes.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing/android_and_ios">
                  {t('How to publish to Android in one click')}
                </BigGhostButton>
                <BigButton to="http://wiki.compilgames.net/doku.php/gdevelop5/all-features/admob">
                  {t('Read the full tutorial')}
                </BigButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={exportAndroid}
                alt="Export to Android from GDevelop in a few clicks"
              />
            </TransparentContainer>
            <MakeGameBanner
              title="Professional games with GDevelop"
              text="Create your ad-supported game with GDevelop. Bundled with tutorials and examples."
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
