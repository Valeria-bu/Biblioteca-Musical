import React from 'react';
import './Song.css';

function Song({ title, artist, album, duration, cover, buttonText = 'Guardar', onAdd, onAction, disabled = false }) {
  const handleClick = onAdd || onAction;

  return (
    <article className="song-card">
      <div className="song-cover">{cover}</div>
      <div className="song-info">
        <h2>{title}</h2>
        <p><strong>Artista:</strong> {artist}</p>
        <p><strong>Álbum:</strong> {album}</p>
        <p><strong>Duración:</strong> {duration}</p>
      </div>
      {handleClick && (
        <button className="save-btn" onClick={handleClick} disabled={disabled}>
          {buttonText}
        </button>
      )}
    </article>
  );
}

export default Song;
