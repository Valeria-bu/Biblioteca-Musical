import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import Library from '../src/components/Library';
import libraryReducer from '../src/redux/slices/librarySlice';
import searchReducer from '../src/redux/slices/searchSlice';
import theme from '../src/theme';

const librarySongs = [
  {
    id: 'song-1',
    title: 'Te Felicito',
    artist: 'Shakira',
    album: 'Siente',
    duration: '3:30',
    cover: 'cover.jpg',
  },
];

function renderLibrary(songs = []) {
  const store = configureStore({
    reducer: {
      library: libraryReducer,
      search: searchReducer,
    },
    preloadedState: {
      library: songs,
      search: { results: [], loading: false, error: null },
    },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ThemeProvider theme={theme}>
            <Library />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    )
  };
}

describe('Library', () => {
  test('renders the songs in the library', () => {
    renderLibrary(librarySongs);

    expect(screen.getByText('Mi biblioteca')).toBeInTheDocument();
    expect(screen.getByText('Te Felicito')).toBeInTheDocument();
  });

  test('removes the song from the library when clicking delete', () => {
    const { store } = renderLibrary(librarySongs);

    fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }));

    expect(store.getState().library).toHaveLength(0);
  });

  test('shows an empty state message when there are no songs', () => {
    renderLibrary([]);

    expect(screen.getByText('Aún no agregaste canciones a tu biblioteca.')).toBeInTheDocument();
  });
});
