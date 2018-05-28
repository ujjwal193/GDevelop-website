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
import hdogScreenshotDodge from '../../img/games/hyperspace-dogfights/hdog_screenshot_dodge.png';
import hdogPromoHeaderHeader from '../../img/games/hyperspace-dogfights/hdog_promo_header_header.png';
import BigTitle from '../../components/BigTitle';
import Row from '../../components/Grid/Row';
import Spacer from '../../components/Grid/Spacer';
import MarkdownText from '../../components/MarkdownText';
import CenteredImage from '../../components/CenteredImage';

const HyperspaceDogfightsBanner = ({ t, title, text }) => (
  <React.Fragment>
    <FullWidthImage
      src={hdogScreenshotDodge}
      alt="Hyperspace Dogfights, a game made with GDevelop"
    />
    <TransparentContainer>
      <BigTitle>
        <b>Hyperspace Dogfights</b> {t('by')} Sleeper Games
      </BigTitle>
      <Spacer height="30px" />
      <Row>
        <Column flex={3}>
          <Paragraph>
            <MarkdownText
              source={t(
                "Hyperspace Dogfights is a juicy jet-combat roguelike in which you'll blast, dodge and slice your way through masses of technologically inferior enemies."
              )}
            />
          </Paragraph>
          <Paragraph>
            {t(
              'As your intergalactic intervention mission progresses, your adaptive hyper-jet will evolve into something stronger and weirder by gathering some of the hundreds of items available in the game.'
            )}
          </Paragraph>
        </Column>
        <CenteredColumn>
          <CenteredImage
            src={hdogPromoHeaderHeader}
            alt="Hyperspace Dogfights, a game created with GDevelop"
            shadow
          />
        </CenteredColumn>
      </Row>
      <CenteredRow>
        <BigButton
          to="https://store.steampowered.com/app/842170/Hyperspace_Dogfights/"
          target="_blank"
          rel="noopener"
        >
          {t('Buy on Steam')}
        </BigButton>
        <BigGhostButton to="/games/hyperspace-dogfights">
          Read more...
        </BigGhostButton>
      </CenteredRow>
      <Spacer height="50px" />
    </TransparentContainer>
  </React.Fragment>
);

export default translate()(HyperspaceDogfightsBanner);
