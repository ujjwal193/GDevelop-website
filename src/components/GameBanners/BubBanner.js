import React from 'react';
import { translate } from 'react-i18next';
import CenteredRow from '../../components/Grid/CenteredRow';
import CenteredColumn from '../../components/Grid/CenteredColumn';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import BigButton from '../../components/BigButton';
import Column from '../../components/Grid/Column';
import Paragraph from '../../components/Paragraph';
import BigGhostButton from '../../components/BigGhostButton';
import FullWidthImage from '../../components/FullWidthImage';
import bubGameBanner from '../../img/bub-game-banner.jpg';
import bubAnimatedLogo from '../../img/bub-animated-logo.gif';
import BigTitle from '../../components/BigTitle';
import Row from '../../components/Grid/Row';
import Spacer from '../../components/Grid/Spacer';
import MarkdownText from '../../components/MarkdownText';
import CenteredImage from '../../components/CenteredImage';

const BubBanner = ({ t }) => (
  <React.Fragment>
    <FullWidthImage
      src={bubGameBanner}
      alt="Lil BUB's game: a retro 8 bit game made with GDevelop"
    />
    <TransparentContainer>
      <BigTitle>
        <b>Lil BUB's HELLO EARTH</b> {t('by')} Lil BUB's Team
      </BigTitle>
      <Spacer height="30px" />
      <Row>
        <Column flex={3}>
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
        </Column>
        <CenteredColumn>
          <CenteredImage
            src={bubAnimatedLogo}
            alt="Lil BUB's HELLO EARTH, a game made with GDevelop"
            shadow
          />
        </CenteredColumn>
      </Row>
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
        <BigGhostButton to="/games/lil-bub-hello-earth">
          Read more...
        </BigGhostButton>
      </CenteredRow>
      <Spacer height="50px" />
    </TransparentContainer>
  </React.Fragment>
);

export default translate()(BubBanner);
