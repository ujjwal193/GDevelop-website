import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageContainer from '../../lib/PageContainer';

import BigTitle from '../../components/BigTitle';
import BannerContainer from '../../components/Containers/BannerContainer';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import WhiteHugeTitle from '../../components/WhiteHugeTitle';
import WhiteParagraph from '../../components/WhiteParagraph';
import Paragraph from '../../components/Paragraph';

import MakeGameBanner from '../../components/MakeGameBanner';
import BigGhostButton from '../../components/BigGhostButton';
import BigButton from '../../components/BigButton';
import CenteredRow from '../../components/Grid/CenteredRow';
import lilBubPlatformer from '../../img/games/lil-bub-hello-earth/lil-bub-platformer.png';
import lilBubShooter from '../../img/games/lil-bub-hello-earth/lil-bub-shooter.png';
import lilBubPlatformerIceland from '../../img/games/lil-bub-hello-earth/lil-bub-platformer-iceland.png';
import bubGameBanner from '../../img/bub-game-banner.jpg';
import CenteredImage from '../../components/CenteredImage';
import MarkdownText from '../../components/MarkdownText';
import { List, ListItem } from '../../components/List';
import CenteredYoutubeVideo from '../../components/CenteredYoutubeVideo';
import Spacer from '../../components/Grid/Spacer';
import { renderWebMonetizationMeta } from '../../lib/WebMonetization';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {(t) => (
          <React.Fragment>
            <Helmet
              title={t("Lil BUB's HELLO EARTH, a game created with GDevelop")}
            >
              <html lang={this.props.pageContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} background={bubGameBanner} dimmed />
            <BannerContainer background={bubGameBanner} dimmed>
              <NavBarSpacer />
              <WhiteHugeTitle>{"Lil BUB's HELLO EARTH"}</WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'A retro 8-bit game, with beautiful arts and soundtrack, made with GDevelop.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/qulOZZIFN34?autoplay=1" />
              <Paragraph>
                <MarkdownText
                  source={t(
                    'BUB is a very special, one of a kind critter. More specifically, she is the [most amazing cat on the planet](http://lilbub.com)... and her game is made with GDevelop!'
                  )}
                />
              </Paragraph>
              <Paragraph>
                {t(
                  'The game is a retro 8-bit game, with beautiful arts and soundtrack, which alternates between platformers levels, with hidden secrets, and shooter levels with bosses, multiple enemies and bonuses.'
                )}
              </Paragraph>
              <Paragraph>
                {t(
                  'Using GDevelop, the game was made available for iOS, Android, Windows, macOS, Linux and even published as a real Arcade game.'
                )}
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={lilBubPlatformerIceland}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <BigTitle>{t('History')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "The game was announced for BUB's 5th birthday. To help making it a reality, a Kickstarter was launched so that all BUB's friends around the world can contribute. The kickstarter was initially launched with $100,000 as the goal, but reached $148,000! GOOD JOB BUB."
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="https://www.kickstarter.com/projects/iamlilbub/lil-bubs-hello-earth-a-retro-8-bit-mobile-video-ga">
                  Kickstarter
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={lilBubPlatformer}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <BigTitle>{t('Features')}</BigTitle>
              <List>
                <ListItem>
                  {t('Beautiful original graphics and animation')}
                </ListItem>
                <ListItem>{t('Parallaxing backgrounds')}</ListItem>
                <ListItem>{t('Unique level design')}</ListItem>
                <ListItem>
                  {t('Huge variety of unique levels, bosses and enemies')}
                </ListItem>
                <ListItem>{t('Complex gameplay and controls')}</ListItem>
                <ListItem>
                  {t('Unique storyline with twists and surprises')}
                </ListItem>
                <ListItem>
                  {t(
                    'Item Inventory: collect items to be used strategically throughout the game'
                  )}
                </ListItem>
                <ListItem>{t('Completely original 8-bit soundtrack')}</ListItem>
                <ListItem>
                  {t(
                    'Tape Deck feature that allows you to select your favorite music from the game'
                  )}
                </ListItem>
                <ListItem>
                  {t(
                    'Ability to revisit and replay levels to further your progress and unlock achievements'
                  )}
                </ListItem>
                <ListItem>
                  {t('Truly innovative Easter Eggs throughout')}
                </ListItem>
              </List>
              <CenteredRow>
                <BigButton to="https://itunes.apple.com/us/app/lil-bubs-hello-earth/id1123383033?mt=8">
                  App Store
                </BigButton>
                <BigButton to="https://play.google.com/store/apps/details?id=com.lilbub.game">
                  Play Store
                </BigButton>
                <BigButton to="http://compilgames.net/bub-landing-page">
                  Windows/Mac/Linux
                </BigButton>
                <BigGhostButton to="https://www.facebook.com/events/427528781041897/">
                  Arcade game
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={lilBubShooter}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <Spacer height="25px" />
            </TransparentContainer>
            <MakeGameBanner
              background={bubGameBanner}
              dimmed
              title="Also want to create your game?"
              text="GDevelop is a game creator app that let you imagine your own games."
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
