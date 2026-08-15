import {
  SongCard,
  SongCover,
  SongInfo,
  SongTitle,
  SongText,
  ActionButton
} from './Song.styles';

function Song({ title, artist, album, duration, cover, buttonText = 'Guardar', onAdd, onAction, disabled = false }) {
  const handleClick = onAdd || onAction;

  return (
    <SongCard>
      <SongCover>{cover}</SongCover>
      <SongInfo>
        <SongTitle>{title}</SongTitle>
        <SongText><strong>Artista:</strong> {artist}</SongText>
        <SongText><strong>Álbum:</strong> {album}</SongText>
        <SongText><strong>Duración:</strong> {duration}</SongText>
      </SongInfo>
      {handleClick && (
        <ActionButton onClick={handleClick} disabled={disabled}>
          {buttonText}
        </ActionButton>
      )}
    </SongCard>
  );
}

export default Song;
