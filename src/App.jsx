import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Library from './components/Library.jsx';
import SongDetail from './components/SongDetail.jsx';

function HomePage() {
  return (
    <div className="app">
      <Header title="Biblioteca Musical" />
      <main className="dashboard">
        <SearchBar />
        <div className="columns">
          <SearchResults />
          <Library />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/album/:id" element={<SongDetail />} />
    </Routes>
  );
}

export default App;
