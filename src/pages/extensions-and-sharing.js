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
import searchNewExtensionsDialog from '../img/search-new-extensions-dialog.png';
import installedAndSearchBehaviorsTabs from '../img/installed-and-search-behaviors-tabs.png';
import CenteredImage from '../components/CenteredImage';
import Spacer from '../components/Grid/Spacer';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

export default class ExtensionsAndSharingPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t('Install new extensions in GDevelop and share yours')}
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
                {t('Install new extensions and share them')}
              </WhiteHugeTitle>
              <WhiteParagraph>
                {t('Search and add new features to your game in a few clicks.')}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <CenteredImage
                maxWidth="800px"
                src={searchNewExtensionsDialog}
                alt="Search in the library of extensions, ready to be installed in one click"
              />
              <ExplanationText>
                {t(
                  'Search in the library of extensions, ready to be installed in one click'
                )}
              </ExplanationText>
              <BigTitle>{t('Install new features with extensions')}</BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'Directly from the editor, you can explore the **online library of extensions** (also called a "package manager" or an "extension store"). Extensions can bring *new behaviors* for your game objects, or *actions, conditions* or expressions that are ready to use in events.'
                  )}
                />
              </Paragraph>
              <Paragraph>
                <MarkdownText
                  source={t(
                    '**Featured extensions** are peer reviewed. They are ideal to add new features at a fast pace to your game, making both prototyping of new games a very quick process and allowing larger games to be constructed by assembling extensions.'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/extensions/search">
                  {t('Read how to install extensions')}
                </BigGhostButton>
                <BigButton to="/custom-behaviors">
                  {t('Learn about creating custom behaviors')}
                </BigButton>
              </CenteredRow>
              <BigTitle>
                {t('Export your own extensions and share them')}
              </BigTitle>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'All extensions can be exported to a file. They can easily be shared and integrated to another project. Better, if you have created a useful extension, you can submit it to be integrated to the library of [open-source, community extensions](https://github.com/4ian/GDevelop-extensions).'
                  )}
                />
              </Paragraph>
              <Paragraph>
                <MarkdownText
                  source={t(
                    'As extensions are constructed using the intuitive GDevelop events sheets, they can be composed of events, [JavaScript or a mix of both](/javascript-game-engine).'
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/extensions/create">
                  {t('How to start a new extension')}
                </BigGhostButton>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/extensions/share">
                  {t('How to share your extension')}
                </BigGhostButton>
              </CenteredRow>
              <CenteredImage
                maxWidth="800px"
                src={installedAndSearchBehaviorsTabs}
                shadow
                alt={t(
                  'Extensions can provide new behaviors that can be added to your game objects.'
                )}
              />
              <ExplanationText>
                {t(
                  'Extensions can provide new behaviors that can be added to your game objects.'
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
