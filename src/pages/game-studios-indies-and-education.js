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
import lilBubPlatformer from '../img/games/lil-bub-hello-earth/lil-bub-platformer.png';
import { List, ListItem } from '../components/List';
import SkewedBorderContainer from '../components/Containers/SkewedBorderContainer';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';
import Link from '../components/Link';

export default class UseCasesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {(t) => (
          <React.Fragment>
            <Helmet
              title={t('GDevelop for Game studios, indies and Education')}
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
                {t('GDevelop for Game studios, indies and Education')}
              </WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is a fast and flexible game engine that can be used for different use cases.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>{t('Professional and Game Studios')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'GDevelop is a lightweight game engine, carefully designed and open-source. The unique design of the editor has been explained during [talks in international conferences](https://www.youtube.com/watch?v=6La7jSCnYyk).'
                  )}
                />
                <List>
                  <ListItem>
                    {t(
                      'MIT license: extend and contribute to the engine source code'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Adaptable editor based on JavaScript, React.js and WebAssembly'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Integrate GDevelop in your team, use events or JavaScript according to your needs'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Get game designers, artists and developers to work on the same environment'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Game projects are human readable and support version control systems like Git or Mercurial'
                    )}
                  </ListItem>
                </List>
              </Paragraph>
              <CenteredRow>
                <BigButton to="/download/">{t('Download GDevelop')}</BigButton>
                <BigGhostButton to="https://github.com/4ian/GDevelop">
                  {t('GDevelop on GitHub')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <SkewedBorderContainer>
              <BigTitle>{t('Commercial support')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Companies can provide commercial or free support for GDevelop:'
                  )}
                />
                <List>
                  <ListItem>
                    <Link to="http://m-craft.com/">MightyCraft (Asia)</Link> -{' '}
                    <Link to="http://gdevelop.m-craft.com/">
                      <i>{t('See GDevelop support and promotion website')}</i>
                    </Link>
                  </ListItem>
                </List>
              </Paragraph>
            </SkewedBorderContainer>
            <TransparentContainer>
              <BigTitle>{t('Indie game developers')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "Accessible and easy to learn, GDevelop is ideal for indie game developers. You'll be able to quickly start a game and iterate by using events, behaviors and new extensions."
                  )}
                />
                <List>
                  <ListItem>
                    {t(
                      'Free to use: download GDevelop and start making a game today'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Integrated editors allowing to make game assets directly from GDevelop'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Super fast prototyping with open-source community extensions and behaviors'
                    )}
                  </ListItem>
                  <ListItem>
                    {t(
                      'Custom behaviors make your game logic reusable and shareable'
                    )}
                  </ListItem>
                </List>
              </Paragraph>
              <CenteredRow>
                <BigButton to="/features">{t('See all features')}</BigButton>
                <BigGhostButton to="/game-jams">
                  {t('GDevelop for game jams')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <SkewedBorderContainer>
              <BigTitle>{t('Education and game making')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Teaching game creation or programming to kids or students? GDevelop has been used by dozens of schools, universities and bootcamp programs for all ages.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="/education">
                  {t('Learn more about GDevelop and education')}
                </BigGhostButton>
              </CenteredRow>
            </SkewedBorderContainer>
            <TransparentContainer>
              <CenteredImage
                maxWidth="800px"
                src={lilBubPlatformer}
                alt={t(
                  "Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                )}
                shadow
              />
            </TransparentContainer>
            <MakeGameBanner
              title={t('Make games with a fast, intuitive game engine')}
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
