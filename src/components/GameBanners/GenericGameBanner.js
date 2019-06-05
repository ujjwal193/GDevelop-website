import React from 'react';
import { translate } from 'react-i18next';
import CenteredRow from '../../components/Grid/CenteredRow';
import CenteredColumn from '../../components/Grid/CenteredColumn';
import TransparentContainer from '../../components/Containers/TransparentContainer';
import Column from '../../components/Grid/Column';
import Paragraph from '../../components/Paragraph';
import FullWidthImage from '../../components/FullWidthImage';
import BigTitle from '../../components/BigTitle';
import Row from '../../components/Grid/Row';
import Spacer from '../../components/Grid/Spacer';
import MarkdownText from '../../components/MarkdownText';
import CenteredImage from '../../components/CenteredImage';
import TryGameButton from '../TryGameButton';

const GenericGameBanner = ({ t, game, bannerBackgroundPosition }) => (
  <React.Fragment>
    <FullWidthImage
      src={game.imageSrc}
      alt={game.title}
      backgroundPosition={bannerBackgroundPosition}
    />
    <TransparentContainer>
      <BigTitle>
        <b>{game.title}</b> {t('by')} {game.author}
      </BigTitle>
      <Spacer height="30px" />
      <Row>
        <Column flex={3}>
          {game.descriptionParagraphs.map(text => (
            <Paragraph>
              <MarkdownText source={text} />
            </Paragraph>
          ))}
        </Column>
        {game.secondaryImageSrc && (
          <CenteredColumn>
            <CenteredImage
              src={game.secondaryImageSrc}
              alt={game.title}
              shadow
            />
          </CenteredColumn>
        )}
      </Row>
      <CenteredRow>
        {game.links.map(({ link, linkType }) => (
          <TryGameButton to={link} linkType={linkType} t={t} />
        ))}
      </CenteredRow>
      <Spacer height="50px" />
    </TransparentContainer>
  </React.Fragment>
);

export default translate()(GenericGameBanner);
