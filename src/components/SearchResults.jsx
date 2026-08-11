import React from 'react';
import { Link } from 'react-router-dom';
import Song from './Song';
import './SearchResults.css';

function SearchResults({ songs, onAddSong, addedSongId }) {
  return (
    <section className="panel">
      <h2>Resultados de búsqueda</h2>
      <div className="song-list">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`search-item ${song.id === addedSongId ? 'added' : ''}`}
          >
            <Link to={`/song/${song.id}`} className="detail-link">
              <Song
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
                cover={song.cover}
                buttonText="Ver detalles"
              />
            </Link>

            <button
              className="add-to-lib"
              onClick={() => onAddSong(song)}
            >
              Agregar a mi biblioteca
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
