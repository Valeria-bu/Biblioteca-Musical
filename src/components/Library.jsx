import React from 'react';
import Song from './Song';
import './Library.css';

function Library({ songs }) {
  return (
    <section className="panel library-panel">
      <h2>Mi biblioteca</h2>
      {songs.length === 0 ? (
        <p className="empty-state">Aún no agregaste canciones a tu biblioteca.</p>
      ) : (
        <div className="song-list">
          {songs.map((song) => (
            <Song
              key={`${song.title}-${song.artist}`}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              cover={song.cover}
              buttonText="Guardada"
              disabled={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Library;
