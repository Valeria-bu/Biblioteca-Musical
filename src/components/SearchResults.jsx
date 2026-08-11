import React from 'react';
import Song from './Song';
import './SearchResults.css';

function SearchResults({ songs, onAddSong }) {
  return (
    <section className="panel">
      <h2>Resultados de búsqueda</h2>
      <div className="song-list">
        {songs.map((song) => (
          <Song
            key={`${song.title}-${song.artist}`}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            cover={song.cover}
            buttonText="Agregar a mi biblioteca"
            onAdd={() => onAddSong(song)}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
