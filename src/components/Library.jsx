import Song from './Song';
import { LibraryPanel, LibraryTitle, SongList, EmptyState } from './Library.styles';

function Library({ songs }) {
  return (
    <LibraryPanel>
      <LibraryTitle>Mi biblioteca</LibraryTitle>
      {songs.length === 0 ? (
        <EmptyState>Aún no agregaste canciones a tu biblioteca.</EmptyState>
      ) : (
        <SongList>
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
        </SongList>
      )}
    </LibraryPanel>
  );
}

export default Library;
