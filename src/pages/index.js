import React from 'react';
import Helmet from 'react-helmet';
import faLightbulb from '@fortawesome/fontawesome-free-solid/faLightbulb';
import faThList from '@fortawesome/fontawesome-free-solid/faThList';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faFlagCheckered from '@fortawesome/fontawesome-free-solid/faFlagCheckered';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';

import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';
import TransparentContainer from '../components/Containers/TransparentContainer';
import LandingContainer from '../components/Containers/LandingContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import WhiteBigButton from '../components/WhiteBigButton';
import CenteredImage from '../components/CenteredImage';
import CarouselImage from '../components/CarouselImage';
import RightImage from '../components/RightImage';
import ExplanationText from '../components/ExplanationText';

import events from '../img/events.png';
import gdevelopWikiTutorials from '../img/gdevelop-wiki-tutorials.png';
import gamesOnMobileTabletDesktopWeb from '../img/games-on-mobile-tablet-desktop-web.png';
import landingScreen from '../img/landing-screen.jpg';
import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Spacer from '../components/Grid/Spacer';
import CenteredColumn from '../components/Grid/CenteredColumn';
import Carousel from '../components/Carousel';
import MakeGameBanner from '../components/MakeGameBanner';
import config from '../config';
import BigGhostButton from '../components/BigGhostButton';
import BottomCenteredImage from '../components/BottomCenteredImage';
import BigTitleIcon from '../components/BigTitleIcon';
import CenteredYoutubeVideo from '../components/CenteredYoutubeVideo';
import MarkdownText from '../components/MarkdownText';
import lilBubPlatformer from '../img/games/lil-bub-hello-earth/lil-bub-platformer.png';
import hdogScreenshotGroundCombat from '../img/games/hyperspace-dogfights/hdog_screenshot_ground_combat.png';
import bigRobDogIii from '../img/games/big_Rob_Dog_III.png';
import bigModelo from '../img/games/big_modelo.png';

export default class IndexPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t(
                'GDevelop - Create games without programming - Open source HTML5 and native game creator'
              )}
            >
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="google-site-verification"
                content="_Z29cn15gPQHT4iCkkAQ3G0ObsFmzc1s7rMTQxdfV84"
              />
              <meta
                name="description"
                content="Create your own games with GDevelop: an open-source game creator. No programming skills are required! Quickly build and share your games on mobile (Android and iOS), desktop and on the web."
              />
            </Helmet>
            <Navbar t={t} />
            <LandingContainer>
              <NavBarSpacer />
              <WhiteBigTitle>{t('Create your own games')}</WhiteBigTitle>
              <Spacer height={'20px'} />
              <Row reverse>
                <CenteredColumn flex={8}>
                  <RightImage
                    width="1095"
                    height="734"
                    src={landingScreen}
                    alt={t(
                      'GDevelop game maker software - create video games without coding'
                    )}
                    title={t('Make your own games with GDevelop')}
                  />
                </CenteredColumn>
                <CenteredColumn flex={5}>
                  <WhiteParagraph textAlign="center">
                    {t(
                      'GDevelop is an open-source, cross-platform game creator designed to be used by everyone - no programming skills required.'
                    )}
                  </WhiteParagraph>
                  <CenteredRow>
                    <WhiteBigButton
                      to={config.onlineEditorUrl}
                      alt="_blank"
                      rel="noopener"
                      category="webapp"
                      label="webapp"
                    >
                      {t('Try it online')}
                    </WhiteBigButton>
                    <WhiteBigButton to="/download/">
                      {t('Download')}
                    </WhiteBigButton>
                  </CenteredRow>
                </CenteredColumn>
              </Row>
            </LandingContainer>
            <TransparentContainer>
              <BigTitle>
                <BigTitleIcon icon={faLightbulb} /> {t('Create any game')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "Unleash your creativity with GDevelop and create any kind of game: platformers, puzzles, shoot 'em up, strategy, [8-bit games](/make-8bit-pixelart-games)... Go through the examples or start a new project from scratch."
                  )}
                />
              </Paragraph>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "With GDevelop, you can make simple projects for fun or create ambitious indie games like [Lil BUB's HELLO EARTH](/games/lil-bub-hello-earth), [Hyperspace Dogfights](/games/hyperspace-dogfights) and [tons of other games](/games-showcase)!"
                  )}
                />
              </Paragraph>
            </TransparentContainer>
            <TransparentContainer noPadding>
              <Carousel
                buttonsDisabled
                dotsDisabled
                keysControlDisabled
                stopAutoPlayOnHover={false}
                autoPlay
                autoPlayInterval={2500}
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                }}
              >
                <CarouselImage
                  src={lilBubPlatformer}
                  alt={t('Create platformer games with GDevelop')}
                  shadow
                />
                <CarouselImage
                  src={hdogScreenshotGroundCombat}
                  alt={t('Develop space shooter games with GDevelop')}
                  shadow
                />
                <CarouselImage
                  src={bigRobDogIii}
                  alt={t('Create mario-like games with GDevelop')}
                  shadow
                />
                <CarouselImage
                  src={bigModelo}
                  alt={t('Make strategy games with GDevelop')}
                  shadow
                />
              </Carousel>
            </TransparentContainer>
            <TransparentContainer>
              <BigTitle>
                <BigTitleIcon icon={faThList} />{' '}
                {t('Events - game creation for everyone')}
              </BigTitle>
              <Paragraph>
                {t(
                  'What makes GDevelop unique and so easy to use are the events. Events are a powerful way to express the logic of your game, without having to learn a programming language.'
                )}
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={events}
                alt={t('Events enable easy game creation')}
                title={t(
                  'Events being used in GDevelop to create the logic of a game'
                )}
              />
              <ExplanationText>
                {t(
                  'When Space is pressed, the character animation and a sound are played. If a bomb touches the character, they both are destroyed.'
                )}
              </ExplanationText>
              <BigTitle>
                <BigTitleIcon icon={faExternalLinkAlt} />{' '}
                {t('Export your game in one click')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Publish your games to the web, iOS, Android, Windows, Mac, Linux and even [Facebook Messenger](/facebook-instant-games). Games created with GDevelop run anywhere and you can even do a one-click export to Android from the app.'
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={gamesOnMobileTabletDesktopWeb}
                alt={t('Make games for iOS, Android, Windows, macOS and Linux')}
                title={t(
                  'Laptop, tablets or phone: games made with GDevelop can run everywhere'
                )}
              />
              <BigTitle>
                <BigTitleIcon icon={faRocket} /> {t('Unlimited possibilities')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Express your ideas without being blocked: you can prototype new features on your games in minutes, and refine them without limits. [Making games](/games-showcase) as never been as easy as assembling your ideas with [the visual editors](/game-editors) provided by GDevelop.'
                  )}
                />
              </Paragraph>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/3wwoy1pY6O8" />
              <ExplanationText>
                {t(
                  'See how to add a trigger button to your platformer game in 90 seconds'
                )}
              </ExplanationText>
              <BigTitle>
                <BigTitleIcon icon={faFlagCheckered} />{' '}
                {t('Get started with tutorials')}
              </BigTitle>
              <Paragraph>
                {t(
                  'Learn step-by-step how to use GDevelop or get help about a specific feature: the wiki has tutorials for beginners and a complete documentation for the software.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/platform-game/start"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Create a platformer game')}
                </BigGhostButton>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Create a tank shooter game')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredImage
              maxWidth="800px"
              src={gdevelopWikiTutorials}
              alt={t('Tutorials for GDevelop and documentation on the wiki')}
              title={t('Tutorials for GDevelop and documentation on the wiki')}
            />
            <MakeGameBanner
              title={t('Make your first game')}
              text={t(
                'Imagine and publish your games with GDevelop. Bundled with tutorials and examples.'
              )}
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
