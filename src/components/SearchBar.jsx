import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, label = 'Buscar artista' }) {
  const [term, setTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    onSearch(term.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={label}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
