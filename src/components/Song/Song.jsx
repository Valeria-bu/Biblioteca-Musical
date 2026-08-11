import "./styles.css";

function Song({ title, artist, album, duration, cover, buttonText = 'Agregar a mi biblioteca', onAdd, onAction, disabled = false }) {
  const handleClick = onAdd || onAction;

  return (
    <article className="song">
      <div className="song-cover">{cover}</div>

      <div className="song-info">
        <h3>{title}</h3>
        <p><strong>Artista:</strong> {artist}</p>
        <p><strong>Álbum:</strong> {album}</p>
        <p><strong>Duración:</strong> {duration}</p>

        {handleClick && (
          <button className="add-button" onClick={handleClick} disabled={disabled}>
            {buttonText}
          </button>
        )}
      </div>
    </article>
  );
}

export default Song;
