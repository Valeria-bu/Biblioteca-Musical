import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header.jsx';
import SearchResults from './components/SearchResults.jsx';
import Library from './components/Library.jsx';
import SearchBar from './components/SearchBar.jsx';
import SongDetail from './components/SongDetail.jsx';
import useFetch from './hooks/useFetch';
import { AppWrapper, AppMain, Columns } from './App.styles';
import GlobalStyle from './globalStyles';
import theme from './theme';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [library, setLibrary] = useState([]);
  const [addedSongId, setAddedSongId] = useState(null);

  const searchUrl = searchTerm
    ? `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
        searchTerm
      )}`
    : null;

  const { data, loading, error, refetch } = useFetch(searchUrl);

  useEffect(() => {
    console.log('La app se ha cargado correctamente.');
  }, []);

  useEffect(() => {
    console.log(`La biblioteca se actualizó. Total: ${library.length}`);
  }, [library]);

  const handleAddToLibrary = (song) => {
    setLibrary((prevLibrary) => {
      const alreadySaved = prevLibrary.some((item) => item.id === song.id);
      if (alreadySaved) return prevLibrary;
      setAddedSongId(song.id);
      window.setTimeout(() => setAddedSongId(null), 700);
      return [...prevLibrary, song];
    });
  };

  const albums = data?.album || [];

  const songsFromAlbums = albums.map((a) => ({
    id: a.idAlbum,
    title: a.strAlbum,
    artist: a.strArtist,
    album: a.strAlbum,
    duration: a.intDuration || '',
    cover: a.strAlbumThumb || '🎵'
  }));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header />

        <AppMain>
          <Columns>
            <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar onSearch={(t) => setSearchTerm(t)} />

                  {loading && <p>Cargando...</p>}
                  {error && (
                    <div>
                      <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
                      <button onClick={refetch}>Reintentar</button>
                    </div>
                  )}

                  <SearchResults
                    songs={songsFromAlbums}
                    onAddSong={handleAddToLibrary}
                    addedSongId={addedSongId}
                  />

                  <Library songs={library} />
                </>
              }
            />

            <Route path="/song/:id" element={<SongDetail />} />
          </Routes>
          </Columns>
        </AppMain>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;