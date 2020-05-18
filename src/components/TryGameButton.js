import React from 'react';
import BigButton from './BigButton';

const TryGameButton = ({ t, to, linkType }) => (
  <BigButton to={to}>
    {linkType === 'play'
      ? t('Play Online')
      : linkType === 'download'
      ? t('Download')
      : linkType === 'learn-more'
      ? t('Learn More')
      : linkType}
  </BigButton>
);

export default TryGameButton;
