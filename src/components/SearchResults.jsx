import { Link } from 'react-router-dom';
import Song from './Song';
import {
  SearchPanel,
  SearchHeading,
  ResultList,
  SearchItem,
  DetailLink,
  AddButton
} from './SearchResults.styles';

function SearchResults({ songs, onAddSong, addedSongId }) {
  return (
    <SearchPanel>
      <SearchHeading>Resultados de búsqueda</SearchHeading>
      <ResultList>
        {songs.map((song) => (
          <SearchItem key={song.id} added={song.id === addedSongId}>
            <DetailLink to={`/song/${song.id}`}>
              <Song
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
                cover={song.cover}
                buttonText="Ver detalles"
              />
            </DetailLink>

            <AddButton onClick={() => onAddSong(song)}>
              Agregar a mi biblioteca
            </AddButton>
          </SearchItem>
        ))}
      </ResultList>
    </SearchPanel>
  );
}

export default SearchResults;
