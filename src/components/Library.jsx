import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSong } from '../redux/libraryActions';
import Song from './Song';

function Library() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state);

  return (
    <section className="panel library-panel">
      <h2>Mi biblioteca</h2>
      {songs.length === 0 ? (
        <p className="empty-state">Aún no agregaste canciones a tu biblioteca.</p>
      ) : (
        <div className="song-list">
          {songs.map((song) => (
            <Song
              key={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              cover={song.cover}
              buttonText="Eliminar"
              onAction={() => dispatch(removeSong(song.id))}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Library;
