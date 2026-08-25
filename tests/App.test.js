import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import App from '../src/App';
import libraryReducer from '../src/redux/slices/librarySlice';
import searchReducer from '../src/redux/slices/searchSlice';
import theme from '../src/theme';

function renderApp() {
  const store = configureStore({
    reducer: {
      library: libraryReducer,
      search: searchReducer,
    },
    preloadedState: {
      library: [],
      search: { results: [], loading: false, error: null },
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );
}

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        results: [
          {
            wrapperType: 'artist',
            artistId: 'artist-1',
            artistName: 'Shakira',
            artworkUrl100: 'cover.jpg',
          },
          {
            wrapperType: 'collection',
            collectionId: 'album-1',
            collectionName: 'Pies Descalzos',
            artistName: 'Shakira',
            artworkUrl100: 'cover.jpg',
          },
        ],
      }),
    });
  });

  test('renders header, search bar, results and library sections', () => {
    renderApp();

    expect(screen.getByText('Biblioteca Musical')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar artista')).toBeInTheDocument();
    expect(screen.getByText('Resultados de búsqueda')).toBeInTheDocument();
    expect(screen.getByText('Mi biblioteca')).toBeInTheDocument();
  });

  test('searches for songs and shows results in the UI', async () => {
    renderApp();

    fireEvent.change(screen.getByPlaceholderText('Buscar artista'), {
      target: { value: 'Shakira' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Shakira' })).toBeInTheDocument();
    });
  });

  test('adds a song to the library from the search results', async () => {
    renderApp();

    fireEvent.change(screen.getByPlaceholderText('Buscar artista'), {
      target: { value: 'Shakira' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Pies Descalzos' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByRole('button', { name: 'Agregar a mi biblioteca' })[0]);

    await waitFor(() => {
      expect(screen.getAllByRole('heading', { name: 'Shakira' })).toHaveLength(2);
    });
  });
});
