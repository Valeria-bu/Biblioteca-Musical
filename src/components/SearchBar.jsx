import { useState } from 'react';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styles';

function SearchBar({ onSearch, label = 'Buscar artista' }) {
  const [term, setTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    onSearch(term.trim());
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder={label}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <SearchButton type="submit">Buscar</SearchButton>
    </SearchForm>
  );
}

export default SearchBar;
