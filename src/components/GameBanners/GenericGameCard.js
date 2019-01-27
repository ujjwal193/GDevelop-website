import React from 'react';
import GameThumbnail from '../GameThumbnail';
import GameTitle from '../GameTitle';
import Spacer from '../Grid/Spacer';
import CenteredRow from '../Grid/CenteredRow';
import TryGameButton from '../TryGameButton';

const GenericGameCard = ({ t, game }) => (
  <React.Fragment>
    <GameThumbnail src={game.imageSrc} />
    <GameTitle textAlign="center">
      {game.title}{' '}
      <i>
        {t('by')} {game.author}
      </i>
    </GameTitle>
    {game.link ? (
      <CenteredRow>
        <TryGameButton to={game.link} linkType={game.linkType} t={t} />
      </CenteredRow>
    ) : (
      <Spacer height="75px" />
    )}
  </React.Fragment>
);

export default GenericGameCard;
