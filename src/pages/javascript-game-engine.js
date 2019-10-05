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
import ExplanationText from '../components/ExplanationText';
import MakeGameBanner from '../components/MakeGameBanner';
import MarkdownText from '../components/MarkdownText';
import javascriptEditor from '../img/javascript-editor.png';
import javascriptEditorDark from '../img/javascript-editor-dark.png';
import CenteredImage from '../components/CenteredImage';
import Spacer from '../components/Grid/Spacer';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

export default class JavascriptGameEnginePage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t('Using JavaScript to make your games with GDevelop')}
            >
              <html lang={this.props.pathContext.localeCode} />
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
                {t('Using JavaScript with GDevelop')}
              </WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop supports JavaScript to create your game or extend the game engine.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredImage
                maxWidth="800px"
                src={javascriptEditor}
                alt="JavaScript being used to write part of a game along with events"
              />
              <ExplanationText>
                {t(
                  'JavaScript can be used to write part of a game, alongside with events'
                )}
              </ExplanationText>
              <BigTitle>
                {t('Add JavaScript code blocks inside your game')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    "GDevelop supports adding JavaScript code blocks at any point in the events of your game. It's a good way to implement a complex algorithm or reuse functions from open-source libraries. Events and code blocks can seamlessly be mixed together - so you can implement parts or even the totality of your game with JavaScript!"
                  )}
                />
              </Paragraph>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'The JavaScript editor is based on the super powerful Monaco Editor, extracted from [Visual Studio Code](https://code.visualstudio.com/). Intellisense autocompletions are provided and the editor supports advanced features like multi-selection for faster coding.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton to="http://wiki.compilgames.net/doku.php/gdevelop5/events/js-code">
                  {t('Learn more about using JavaScript')}
                </BigButton>
              </CenteredRow>
              <BigTitle>
                {t('Extend GDevelop with JavaScript extensions')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'GDevelop is modular and can be extended to suit your needs. In particular, all features available to games (objects, behaviors, events) are based on the extension system. You can quickly create new extensions for your game or contribute to existing ones as GDevelop is [open-source](https://github.com/4ian/GD).'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton to="https://github.com/4ian/GD/blob/master/newIDE/README-extensions.md">
                  {t('How to write extensions')}
                </BigButton>
                <BigGhostButton to="http://4ian.github.io/GD-Documentation/GDJS%20Runtime%20Documentation/index.html">
                  {t('Game engine JavaScript documentation')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={javascriptEditorDark}
                alt="JavaScript code blocks being used in GDevleop with the Dark theme"
              />
              <ExplanationText>
                {t(
                  'The Dark theme being used in GDevelop. The code editor also comes bundled with several beautiful themes!'
                )}
              </ExplanationText>
            </TransparentContainer>
            <Spacer height="25px" />
            <MakeGameBanner
              title="Write HTML5, mobile and desktop games"
              text="Use your JavaScript skills with GDevelop to quickly create games for all platforms."
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
