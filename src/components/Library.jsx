import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSong } from '../redux/slices/librarySlice';
import Song from './Song';
import { LibraryPanel, LibraryTitle, SongList, EmptyState } from './Library.styles';

function Library() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.library);

  return (
    <LibraryPanel>
      <LibraryTitle>Mi biblioteca</LibraryTitle>
      {songs.length === 0 ? (
        <EmptyState>Aún no agregaste canciones a tu biblioteca.</EmptyState>
      ) : (
        <SongList>
          {songs.map((song) => (
            <Song
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              cover={song.cover}
              buttonText="Eliminar"
              onAction={() => dispatch(removeSong(song.id))}
            />
          ))}
        </SongList>
      )}
    </LibraryPanel>
  );
}

export default Library;
