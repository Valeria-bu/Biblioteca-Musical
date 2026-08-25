import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import SearchBar from '../src/components/SearchBar';
import searchReducer from '../src/redux/slices/searchSlice';
import libraryReducer from '../src/redux/slices/librarySlice';
import theme from '../src/theme';

function renderSearchBar() {
  const store = configureStore({
    reducer: {
      search: searchReducer,
      library: libraryReducer,
    },
    preloadedState: {
      search: { results: [], loading: false, error: null },
      library: [],
    },
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SearchBar />
      </ThemeProvider>
    </Provider>
  );
}

describe('SearchBar', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ results: [] }),
    });
  });

  test('renders the search input', () => {
    renderSearchBar();

    expect(screen.getByPlaceholderText('Buscar artista')).toBeInTheDocument();
  });

  test('updates the input value as the user types', () => {
    renderSearchBar();
    const input = screen.getByPlaceholderText('Buscar artista');

    fireEvent.change(input, { target: { value: 'Shakira' } });

    expect(input).toHaveValue('Shakira');
  });

  test('dispatches the search when submitting', async () => {
    renderSearchBar();
    const input = screen.getByPlaceholderText('Buscar artista');

    fireEvent.change(input, { target: { value: 'Shakira' } });
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
