import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../redux/slices/librarySlice';
import Song from './Song';
import { SearchPanel, SearchHeading, ResultList } from './SearchResults.styles';

function SearchResults() {
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);

  if (loading) return <SearchPanel><SearchHeading>Resultados de búsqueda</SearchHeading><p>Cargando...</p></SearchPanel>;
  if (error) return <SearchPanel><SearchHeading>Resultados de búsqueda</SearchHeading><p>Error: {error}</p></SearchPanel>;
  if (!results.length) return <SearchPanel><SearchHeading>Resultados de búsqueda</SearchHeading><p>No hay resultados disponibles.</p></SearchPanel>;

  return (
    <SearchPanel>
      <SearchHeading>Resultados de búsqueda</SearchHeading>
      <ResultList>
        {results.map((song) => (
          <Song
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            cover={song.cover}
            type={song.album === 'Artista' ? 'artist' : 'album'}
            buttonText="Agregar a mi biblioteca"
            onAction={() => dispatch(addSong(song))}
          />
        ))}
      </ResultList>
    </SearchPanel>
  );
}

export default SearchResults;
