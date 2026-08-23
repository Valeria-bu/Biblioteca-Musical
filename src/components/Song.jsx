import React from 'react';

function Song({ title, artist, album, duration, cover, buttonText = 'Guardar', onAction, disabled = false }) {
  return (
    <article className="song-card">
      <div className="song-cover">{cover}</div>
      <div className="song-info">
        <h2>{title}</h2>
        <p><strong>Artista:</strong> {artist}</p>
        <p><strong>Álbum:</strong> {album}</p>
        <p><strong>Duración:</strong> {duration}</p>
      </div>
      {onAction && (
        <button className="save-btn" onClick={onAction} disabled={disabled}>
          {buttonText}
        </button>
      )}
    </article>
  );
}

export default Song;
