import React from 'react';
import { translate } from 'react-i18next';
import BannerContainer from './Containers/BannerContainer';
import WhiteHugeTitle from './WhiteHugeTitle';
import WhiteParagraph from './WhiteParagraph';
import WhiteBigButton from './WhiteBigButton';
import CenteredRow from './Grid/CenteredRow';
import config from '../config';

const MakeGameBanner = ({ t, title, text, background, dimmed }) => (
  <BannerContainer background={background} dimmed={dimmed}>
    <WhiteHugeTitle>{title || t('Make your first game')}</WhiteHugeTitle>
    <WhiteParagraph>
      {text ||
        t(
          'Imagine and publish your games with GDevelop. Bundled with tutorials and examples.'
        )}
    </WhiteParagraph>
    <CenteredRow>
      <WhiteBigButton
        to={config.onlineEditorUrl}
        alt="_blank"
        rel="noopener"
        category="webapp"
        label="webapp"
      >
        {t('Try it online')}
      </WhiteBigButton>
      <WhiteBigButton to="/download/">{t('Download')}</WhiteBigButton>
    </CenteredRow>
  </BannerContainer>
);

export default translate()(MakeGameBanner);
