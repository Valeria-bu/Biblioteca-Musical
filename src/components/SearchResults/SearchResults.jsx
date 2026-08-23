import React from 'react';
import Song from '../Song/Song';

function SearchResults({ songs, onAddSong }) {
  return (
    <section className="panel">
      <h2>Resultados de búsqueda</h2>

      <div className="song-list">
        {songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            cover={song.cover}
            onAdd={() => onAddSong(song)}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;