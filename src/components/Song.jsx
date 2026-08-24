import React from 'react';
import { Link } from 'react-router-dom';
import {
  SongCard,
  SongCover,
  SongInfo,
  SongTitle,
  SongText,
  ActionButton,
  SongLink,
  ResultBadge
} from './Song.styles';

function Song({ id, title, artist, album, duration, cover, buttonText = 'Guardar', onAction, disabled = false, type = 'album' }) {
  const isArtist = type === 'artist';

  return (
    <SongCard $isArtist={isArtist}>
      <SongCover $isArtist={isArtist}>{cover || (isArtist ? '🎤' : '🎵')}</SongCover>
      <SongInfo>
        {id && !isArtist ? (
          <SongLink to={`/album/${id}`}>
            <SongTitle>{title}</SongTitle>
          </SongLink>
        ) : (
          <SongTitle>{title}</SongTitle>
        )}
        <ResultBadge $isArtist={isArtist}>{isArtist ? 'Artista' : 'Álbum'}</ResultBadge>
        <SongText><strong>Artista:</strong> {artist}</SongText>
        <SongText><strong>{isArtist ? 'Género' : 'Álbum'}:</strong> {album}</SongText>
        {duration && <SongText><strong>Duración:</strong> {duration}</SongText>}
      </SongInfo>
      {onAction && (
        <ActionButton onClick={onAction} disabled={disabled}>
          {buttonText}
        </ActionButton>
      )}
    </SongCard>
  );
}

export default Song;
