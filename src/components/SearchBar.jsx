import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../redux/slices/searchSlice';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styles';

function SearchBar({ label = 'Buscar artista' }) {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.search);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedTerm = term.trim();

    if (!trimmedTerm) return;

    dispatch(fetchSongs(trimmedTerm));
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder={label}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <SearchButton type="submit" disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar'}
      </SearchButton>
    </SearchForm>
  );
}

export default SearchBar;
