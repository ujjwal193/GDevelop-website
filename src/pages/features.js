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

import chromeWithGame from '../img/chrome-with-game.png';
import { List, ListItem } from '../components/List';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredImage from '../components/BottomCenteredImage';
import BigGhostButton from '../components/BigGhostButton';
import BigButton from '../components/BigButton';
import CenteredRow from '../components/Grid/CenteredRow';
import MarkdownText from '../components/MarkdownText';
import CenteredImage from '../components/CenteredImage';
import lilBubPlatformer from '../img/games/lil-bub-hello-earth/lil-bub-platformer.png';
import ExplanationText from '../components/ExplanationText';
import SkewedBorderContainer from '../components/Containers/SkewedBorderContainer';
import SkewedBackgroundContainer from '../components/Containers/SkewedBackgroundContainer';
import WhiteBigButton from '../components/WhiteBigButton';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {(t) => (
          <React.Fragment>
            <Helmet
              title={t(
                'Features of GDevelop - create any kind of games without coding'
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
              <WhiteHugeTitle>{t('Fully featured')}</WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is bundled with dozens of features to imagine and create any kind of games.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>{t('Deploy your game everywhere')}</BigTitle>
              <List>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'One click export for [Android](http://wiki.compilgames.net/doku.php/gdevelop5/publishing/android_and_ios).'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'One click export to [Facebook Instant Games](/facebook-instant-games), to play on Messenger.'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Export your game [for the web](http://wiki.compilgames.net/doku.php/gdevelop5/publishing/web) in one click'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Export your game to iOS (with [PhoneGap Build or Cordova](http://wiki.compilgames.net/doku.php/gdevelop5/publishing/android_and_ios_with_cordova)).'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Publish your game on [Poki](/poki), Kongregate, Itch.io and other gaming website!'
                    )}
                  />
                </ListItem>
                <ListItem>
                  {t(
                    'Export as a stand-alone executable game for Windows, macOS and Linux'
                  )}{' '}
                  -{' '}
                  <i>
                    <MarkdownText
                      source={t(
                        '[in one click!](http://wiki.compilgames.net/doku.php/gdevelop5/publishing/windows-macos-linux)'
                      )}
                    />
                  </i>
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Display [ads and reward videos](/ads-in-your-game-with-admob) to your players using [AdMob](/ads-in-your-game-with-admob).'
                    )}
                  />
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing">
                  {t('Learn how to publish your game')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <SkewedBorderContainer>
              <BigTitle>{t('Objects for your games')}</BigTitle>
              <List>
                <ListItem>
                  <MarkdownText
                    source={t('**Sprites** with multiple animations')}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Create explosions, fire and impressive effects with **Particle Emitters**'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t('**"9 patch"** sprites, perfect for platforms')}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      '**Tiled sprites**, to create mosaics, floors and repeating patterns'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText source={t('**Text** objects')} />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t('Formatted rich text with **BB Text** objects')}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t('Embed videos with **Video** objects')}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Draw custom shapes on screen with **Shape Painters**'
                    )}
                  />
                </ListItem>
                <ListItem>{t('Support for custom collision masks')}</ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/objects">
                  {t('Read the documentation for all objects')}
                </BigGhostButton>
                <BigButton to="/game-examples-starters">
                  {t('Try the online examples')}
                </BigButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={lilBubPlatformer}
                alt="Screenshot of Lil BUB's HELLO EARTH, a game made with GDevelop, the open-source game making app"
                shadow
              />
              <ExplanationText>
                <MarkdownText source="[Lil BUB's HELLO EARTH](/games/lil-bub-hello-earth), a game made with GDevelop" />
              </ExplanationText>
            </SkewedBorderContainer>
            <TransparentContainer>
              <BigTitle>{t('Use visual effects ("shaders")')}</BigTitle>
              <List>
                <ListItem>
                  {t('Dozens of visual effects are bundled with GDevelop')} -{' '}
                  <i>
                    {t(
                      'Blur, Noise, CRT effect, Color Map, Chromatic Aberration, Glow, Shadows...'
                    )}
                  </i>
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Add your own effects by [creating new extensions for the game engine](/javascript-game-engine).'
                    )}
                  />
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/interface/scene-editor/layer-effects">
                  {t('Learn how to use effects in GDevelop')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <SkewedBackgroundContainer>
              <BigTitle white>
                {t('Add behaviors to your game objects')}
              </BigTitle>
              <List>
                <ListItem>
                  <b>{t('Physics engine')}</b> -{' '}
                  <i>{t('Add realistic behavior to your objects')}</i>
                </ListItem>
                <ListItem>
                  {t('Pathfinding')} -{' '}
                  <i>{t('Have your objects move and avoiding obstacles')}</i>
                </ListItem>
                <ListItem>{t('Top-down movement')}</ListItem>
                <ListItem>
                  <b>{t('Platformer engine')}</b> -{' '}
                  <i>{t('create platformer games in a breeze')}</i>
                </ListItem>
                <ListItem>
                  {t('Draggable objects')} -{' '}
                  <i>
                    {t('quickly make your objects draggable with mouse/touch')}
                  </i>
                </ListItem>
                <ListItem>
                  {t('Anchor')} -{' '}
                  <i>
                    {t(
                      'support multiple screen sizes by ensuring controls stay at the right position'
                    )}
                  </i>
                </ListItem>
                <ListItem>
                  <b>{t('Tweens')}</b> -{' '}
                  <i>
                    {t(
                      'smoothly animate object positions, sizes, opacity and colors'
                    )}
                  </i>
                </ListItem>
                <ListItem>
                  {t(
                    'And more, to automate current tasks and behaviors in a few clicks!'
                  )}
                </ListItem>
              </List>
              <CenteredRow>
                <WhiteBigButton to="http://wiki.compilgames.net/doku.php/gdevelop5/behaviors">
                  {t('Read the documentation for all behaviors')}
                </WhiteBigButton>
                <WhiteBigButton to="/custom-behaviors">
                  {t('Create your own custom behaviors')}
                </WhiteBigButton>
              </CenteredRow>
            </SkewedBackgroundContainer>
            <TransparentContainer>
              <BigTitle>{t('Make desktop & mobile-ready games')}</BigTitle>
              <List>
                <ListItem>
                  {t(
                    'Save player data in the browser storage or on their devices'
                  )}
                </ListItem>
                <ListItem>
                  {t('Full support for sound effects and musics')}
                </ListItem>
                <ListItem>
                  {t('Support for touchscreens & multi-touch')}
                </ListItem>
              </List>
            </TransparentContainer>
            <SkewedBorderContainer>
              <BigTitle>{t('Design advanced levels and interfaces')}</BigTitle>
              <List>
                <ListItem>
                  {t('The scene editor lets you visually edit your levels')}
                </ListItem>
                <ListItem>
                  {t('Support for multiple layers')} -{' '}
                  <i>{t('Add interfaces and create parallax effects')}</i>
                </ListItem>
                <ListItem>
                  {t('Create your levels dynamically with external layouts')}
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Design your assets with [Piskel](/make-8bit-pixelart-games)'
                    )}
                  />{' '}
                  - <i>{t('a powerful pixel art and sprite editor')}</i>
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t('Generate [sound effects with Jfxr](/game-jams)')}
                  />{' '}
                  -{' '}
                  <i>
                    {t('create effects and customize them in a few clicks')}
                  </i>
                </ListItem>
                <ListItem>
                  {t('Debugger')} -{' '}
                  <i>
                    {t(
                      'Inspect the content of your game and make dynamic changes while previewing your game'
                    )}
                  </i>
                </ListItem>
                <ListItem>
                  {t('Performance profiler')} -{' '}
                  <i>
                    <MarkdownText
                      source={t(
                        '[monitor the resource expensive spots](http://wiki.compilgames.net/doku.php/gdevelop5/interface/debugger/profile-your-game) in your game'
                      )}
                    />
                  </i>
                </ListItem>
              </List>
              <CenteredRow>
                <BigButton to="/game-editors">
                  {t('Discover GDevelop editors')}
                </BigButton>
              </CenteredRow>
            </SkewedBorderContainer>
            <TransparentContainer>
              <BigTitle>
                {t('Build ambitious games with advanced features')}
              </BigTitle>
              <List>
                <ListItem>
                  {t(
                    'Communicate with external websites or services using HTTP requests.'
                  )}
                </ListItem>
                <ListItem>
                  {t('Use advanced events: loops, for-each...')}
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Create reusable **functions** using events, that can be used as actions, conditions or expressions in your game'
                    )}
                  />{' '}
                  -{' '}
                  <i>
                    {t(
                      'a powerful feature never seen in other game creation tools.'
                    )}
                  </i>
                </ListItem>
                <ListItem>
                  {t(
                    'Manipulate variables with arbitrary complex structures, with support for reading/writing JSON.'
                  )}
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'You can [use JavaScript to code](/javascript-game-engine) parts of your game'
                    )}
                  />{' '}
                  -{' '}
                  <i>
                    {t(
                      'use it for a few functions, to write extensions or the majority of your game.'
                    )}
                  </i>
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Display ads in your game with [AdMob](/ads-in-your-game-with-admob) or link to products from your [Shopify shop](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/shopify).'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <MarkdownText
                    source={t(
                      'Search and [install new features with extensions](/extensions-and-sharing), built by the community'
                    )}
                  />{' '}
                  -{' '}
                  <i>
                    {t(
                      'get new, ready to use features for your game in a few clicks'
                    )}
                  </i>
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/events">
                  {t('Read the documentation about events')}
                </BigGhostButton>
                <BigButton to="/game-examples-starters">
                  {t('Try the online examples')}
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
