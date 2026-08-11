import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import SearchResults from './components/SearchResults.jsx';
import Library from './components/Library.jsx';
import './App.css';

const initialSearchResults = [
  {
    id: 1,
    title: 'Como la Flor',
    artist: 'Selena',
    album: 'Amor Prohibido',
    duration: '3:05',
    cover: '🎵'
  },
  {
    id: 2,
    title: 'Bailando',
    artist: 'Enrique Iglesias',
    album: 'Insomniac',
    duration: '4:00',
    cover: '🎶'
  },
  {
    id: 3,
    title: 'Ella Baila Sola',
    artist: 'Eslabon Armado',
    album: 'Tu Veneno Mortal',
    duration: '3:33',
    cover: '💖'
  }
];

function App() {
  const [searchResults] = useState(initialSearchResults);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    console.log('La app se ha cargado correctamente.');
  }, []);

  useEffect(() => {
    console.log(`La biblioteca se actualizó. Total: ${library.length}`);
  }, [library]);

  const handleAddToLibrary = (song) => {
    setLibrary((prevLibrary) => {
      const alreadySaved = prevLibrary.some(
        (item) => item.id === song.id
      );

      if (alreadySaved) {
        return prevLibrary;
      }

      return [...prevLibrary, song];
    });
  };

  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <div className="columns">

          <SearchResults
            songs={searchResults}
            onAddSong={handleAddToLibrary}
          />

          <Library songs={library} />

        </div>
      </main>
    </div>
  );
}

export default App;