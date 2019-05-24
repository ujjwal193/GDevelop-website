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

import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import Paragraph from '../components/Paragraph';
import ExplanationText from '../components/ExplanationText';
import MakeGameBanner from '../components/MakeGameBanner';
import MarkdownText from '../components/MarkdownText';
import flashCustomBehavior from '../img/flash-custom-behavior.png';
import customBehaviorAction from '../img/custom-behavior-action.png';
import searchNewBehaviors from '../img/search-new-behaviors.png';
import CenteredImage from '../components/CenteredImage';
import Spacer from '../components/Grid/Spacer';
import { List, ListItem } from '../components/List';

export default class CustomBehaviorsPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t(
                'Create custom behaviors for your game objects in GDevelop'
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
              <WhiteBigTitle>{t('Create custom behaviors')}</WhiteBigTitle>
              <WhiteParagraph>
                {t(
                  'In a few clicks, you can create new behaviors for your game objects - using events or JavaScript.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredImage
                maxWidth="800px"
                src={flashCustomBehavior}
                alt={t(
                  'Flash is a custom behavior that is created directly from GDevelop - allowing an object to blink'
                )}
              />
              <ExplanationText>
                {t(
                  'Flash is a custom behavior that is created directly from GDevelop - allowing an object to blink'
                )}
              </ExplanationText>
              <BigTitle>
                {t('Create custom behaviors - directly from GDevelop editor')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "GDevelop allows you to create new behaviors, using the same events as the ones that you're using to create the rules of your game."
                  )}
                />
              </Paragraph>
              <List>
                <ListItem>
                  <i>
                    <MarkdownText
                      source={t(
                        'Want enemies to automatically follow the player?'
                      )}
                    />
                  </i>{' '}
                  {t('Create a Follower behavior. 🏃‍♂️')}
                </ListItem>
                <ListItem>
                  <i>
                    <MarkdownText
                      source={t('Want some rockets to target the player?')}
                    />
                  </i>{' '}
                  {t('Create a Missile behavior. 🚀')}
                </ListItem>
                <ListItem>
                  <i>
                    <MarkdownText
                      source={t(
                        'Want enemies and the players to have health and take damage?'
                      )}
                    />
                  </i>{' '}
                  {t('Create a Health behavior. 💊')}
                </ListItem>
              </List>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Behaviors can be created for any kind of object, and you can create custom actions and conditions associated to your new behavior.'
                  )}
                />
              </Paragraph>
              <CenteredImage
                maxWidth="800px"
                shad
                src={customBehaviorAction}
                alt={t(
                  'An action is exposed by the behavior, and can be used like any other action in the events'
                )}
              />
              <ExplanationText>
                {t(
                  'An action is exposed by the behavior, and can be used like any other action in the events'
                )}
              </ExplanationText>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/events-based-behaviors">
                  {t('Read the documentation about custom behaviors')}
                </BigGhostButton>
                <BigButton to="/download">{t('Download GDevelop')}</BigButton>
              </CenteredRow>
              <BigTitle>
                {t('Import new behaviors, created by the GDevelop community')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Behaviors, as well as extensions, can be shared between projects. You can **export and import** them in a few clicks. If your behavior is generic and reusable in multiple games, you can even submit it to be integrated in the growing list of custom behaviors shared by the community.'
                  )}
                />
              </Paragraph>
              <List>
                <ListItem>
                  <MarkdownText
                    source={t('Create your game by assembling behaviors')}
                  />{' '}
                  - <i>{t('perfect for fast prototyping')}</i>
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Progressively create custom behaviors for objects in your game'
                    )}
                  />{' '}
                  -{' '}
                  <i>{t('ideal for large games and keeping simple events.')}</i>
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/extensions/search">
                  {t('How to install community extensions')}
                </BigGhostButton>
                <BigButton to="/extensions-and-sharing">
                  {t('Learn more about extensions')}
                </BigButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={searchNewBehaviors}
                alt={t(
                  'Search for new behaviors in the list of behaviors shared by the community'
                )}
              />
            </TransparentContainer>
            <Spacer height="25px" />
            <MakeGameBanner
              title="Make games in record time"
              text="Try GDevelop and its fast approach to game creation"
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
