import React, { useState } from 'react';
import Header from './components/Header.jsx';
import SearchResults from './components/SearchResults.jsx';
import Library from './components/Library.jsx';

const initialSearchResults = [
  { id: 1, title: 'Como la Flor', artist: 'Selena', album: 'Amor Prohibido', duration: '3:05' },
  { id: 2, title: 'Bailando', artist: 'Enrique Iglesias', album: 'Insomniac', duration: '4:00' },
  { id: 3, title: 'Ella Baila Sola', artist: 'Eslabon Armado', album: 'Tu Veneno Mortal', duration: '3:33' }
];

function App() {
  const [searchResults] = useState(initialSearchResults);

  return (
    <div className="app">
      <Header />
      <main className="dashboard">
        <div className="columns">
          <SearchResults songs={searchResults} />
          <Library />
        </div>
      </main>
    </div>
  );
}

export default App;
