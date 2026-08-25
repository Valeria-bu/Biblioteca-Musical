import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import SearchResults from '../src/components/SearchResults';
import searchReducer from '../src/redux/slices/searchSlice';
import libraryReducer from '../src/redux/slices/librarySlice';
import theme from '../src/theme';

const results = [
  {
    id: 'song-1',
    title: 'Te Felicito',
    artist: 'Shakira',
    album: 'Siente',
    duration: '3:30',
    cover: 'cover.jpg',
  },
];

function renderSearchResults(initialState = {}) {
  const store = configureStore({
    reducer: {
      search: searchReducer,
      library: libraryReducer,
    },
    preloadedState: {
      search: { results, loading: false, error: null },
      library: [],
      ...initialState,
    },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ThemeProvider theme={theme}>
            <SearchResults />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    )
  };
}

describe('SearchResults', () => {
  test('renders the searched songs with their details', () => {
    renderSearchResults();

    expect(screen.getByText('Resultados de búsqueda')).toBeInTheDocument();
    expect(screen.getByText('Te Felicito')).toBeInTheDocument();
    expect(screen.getByText('Shakira')).toBeInTheDocument();
    expect(screen.getByText('Siente')).toBeInTheDocument();
  });

  test('adds the song to the library when the action button is clicked', () => {
    const { store } = renderSearchResults();

    fireEvent.click(screen.getByRole('button', { name: 'Agregar a mi biblioteca' }));

    expect(store.getState().library).toHaveLength(1);
    expect(store.getState().library[0].title).toBe('Te Felicito');
  });
});
