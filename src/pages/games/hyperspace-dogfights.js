import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageContainer from '../../lib/PageContainer';

import BigTitle from '../../components/BigTitle';
import BannerContainer from '../../components/Containers/BannerContainer';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import WhiteBigTitle from '../../components/WhiteBigTitle';
import WhiteParagraph from '../../components/WhiteParagraph';
import Paragraph from '../../components/Paragraph';

import MakeGameBanner from '../../components/MakeGameBanner';
import BigGhostButton from '../../components/BigGhostButton';
import BigButton from '../../components/BigButton';
import CenteredRow from '../../components/Grid/CenteredRow';
import hdogScreenshotMaw from '../../img/games/hyperspace-dogfights/hdog_screenshot_maw.png';
import hdogPromoHeaderHeader from '../../img/games/hyperspace-dogfights/hdog_promo_header_header.png';
import hdogScreenshotGroundCombat from '../../img/games/hyperspace-dogfights/hdog_screenshot_ground_combat.png';
import hdogScreenshotDodge from '../../img/games/hyperspace-dogfights/hdog_screenshot_dodge.png';
import CenteredImage from '../../components/CenteredImage';
import MarkdownText from '../../components/MarkdownText';
import { List, ListItem } from '../../components/List';
import CenteredYoutubeVideo from '../../components/CenteredYoutubeVideo';
import Spacer from '../../components/Grid/Spacer';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t('Hyperspace Dogfights, a game created with GDevelop')}
            >
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
            </Helmet>
            <Navbar t={t} background={hdogPromoHeaderHeader} dimmed />
            <BannerContainer background={hdogPromoHeaderHeader} dimmed>
              <NavBarSpacer />
              <WhiteBigTitle>{'Hyperspace Dogfights'}</WhiteBigTitle>
              <WhiteParagraph>
                {t('A juicy jet-combat roguelike game, made with GDevelop.')}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredYoutubeVideo src="https://www.youtube.com/embed/q2MmrpngoD8?autoplay=1" />
              <Paragraph>
                <MarkdownText
                  source={t(
                    "Hyperspace Dogfights is a juicy jet-combat roguelike in which you'll blast, dodge and slice your way through masses of technologically inferior enemies. As your intergalactic intervention mission progresses, your adaptive hyper-jet will evolve into something stronger and weirder by gathering some of the hundreds of items available in the game."
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={hdogScreenshotGroundCombat}
                alt="Screenshot of Hyperspace Dogfights, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <BigTitle>{t('History')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Hyperspace Dogfights began as a side project to our now canceled space exploration roguelike Hyperspace Admirals. HDog was prototyped in late 2016, after which it received a limited early access release on itch.io. Over the course of 2017 the majority of its content was developed and continuous alpha feedback was taken into account. The game was feature-complete in march 2018, after which the release was announced.'
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                src={hdogScreenshotMaw}
                alt="Screenshot of Hyperspace Dogfights, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <BigTitle>{t('Features')}</BigTitle>
              <List>
                <ListItem>
                  {t(
                    'Fierce and juicy 2d jet combat against masses of air and ground based enemies'
                  )}
                </ListItem>
                <ListItem>
                  {t(
                    'Hundreds of stackable passives, over fifty weapons and actives; all geared towards producing weird synergies with another'
                  )}
                </ListItem>
                <ListItem>
                  {t(
                    'High replayability, your will evolve a little different on each run'
                  )}
                </ListItem>
                <ListItem>
                  {t('Seven zones with distinct enemy composition to explore')}
                </ListItem>
                <ListItem>{t('10+ screen-fillingbosses')}</ListItem>
                <ListItem>
                  {t(
                    '5+ Player hyper-jets to fly, all coming with unlockable mk2 loadouts'
                  )}
                </ListItem>
                <ListItem>
                  {t(
                    '16 chilled, multi-layered music tracks by Enuit and Ole Toensen'
                  )}
                </ListItem>
              </List>
              <CenteredRow>
                <BigButton
                  to="https://store.steampowered.com/app/842170/Hyperspace_Dogfights/"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Buy on Steam')}
                </BigButton>
                <BigGhostButton
                  to="http://hyperspacedogfights.com/"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Official website')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={hdogScreenshotDodge}
                alt="Screenshot of Hyperspace Dogfights, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <Spacer height="25px" />
            </TransparentContainer>
            <MakeGameBanner
              background={hdogPromoHeaderHeader}
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
