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
import config from '../config';
import chromeWithGame from '../img/chrome-with-game.png';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredImage from '../components/BottomCenteredImage';
import ExamplesInformation from '../lib/ExamplesInformation';
import BigButton from '../components/BigButton';
import Title from '../components/Title';
import Row from '../components/Grid/Row';
import Column from '../components/Grid/Column';

const formatExampleName = name => {
  if (!name.length) return '';

  return name[0].toUpperCase() + name.substr(1).replace(/-/g, ' ');
};

const Example = ({ t, name, exampleInformation }) => (
  <React.Fragment>
    <Row>
      <Column>
        <Title>{formatExampleName(name)}</Title>
        <Paragraph>{exampleInformation.description}</Paragraph>
      </Column>
      <Column flex="0">
        <CenteredRow>
          <BigButton
            rel="noopener"
            target="_blank"
            category="open-webapp-example"
            label={name}
            to={`${config.onlineEditorUrl}/?project=example://${name}`}
          >
            {t('Open in GDevelop')}
          </BigButton>
        </CenteredRow>
      </Column>
    </Row>
  </React.Fragment>
);

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t(
                'Examples of GDevelop - make platformer, shooter, rpg, action games...'
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
              <WhiteHugeTitle>{t('Examples and Starters')}</WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is bundled with 80+ examples and starters to get you quickly started, learn or try a specific feature.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <Paragraph>
                {t(
                  "These are the examples bundled with GDevelop. Curious? You can open and try them directly from your browser. GDevelop is fast to start and you'll be playing with the examples in seconds."
                )}
              </Paragraph>
              {Object.keys(ExamplesInformation).map(name => (
                <Example
                  t={t}
                  name={name}
                  exampleInformation={ExamplesInformation[name]}
                />
              ))}
              <BigTitle>{t('Get started with tutorials')}</BigTitle>
              <Paragraph>
                {t(
                  'Learn step-by-step how to use GDevelop or get help about a specific feature: the wiki has tutorials for beginners and a complete documentation for the software.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/platform-game/start"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Create a platformer game')}
                </BigButton>
                <BigButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Create a tank shooter game')}
                </BigButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredImage
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
