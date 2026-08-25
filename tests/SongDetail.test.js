import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SongDetail from '../src/components/SongDetail';
import useFetch from '../src/hooks/useFetch';
import theme from '../src/theme';

jest.mock('../src/hooks/useFetch');

function renderDetail(fetchState) {
  useFetch.mockReturnValue(fetchState);

  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter
        initialEntries={['/album/album-1']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/album/:id" element={<SongDetail />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('SongDetail', () => {
  test('renders loading and not-found states', () => {
    renderDetail({ data: null, loading: true, error: null, refetch: jest.fn() });
    expect(screen.getByText('Cargando...')).toBeInTheDocument();

    renderDetail({ data: null, loading: false, error: null, refetch: jest.fn() });
    expect(screen.getByText('No se encontró el álbum.')).toBeInTheDocument();
  });

  test('renders an error and retries loading', () => {
    const refetch = jest.fn();
    renderDetail({ data: null, loading: false, error: 'Network error', refetch });

    fireEvent.click(screen.getByRole('button', { name: 'Reintentar' }));

    expect(refetch).toHaveBeenCalledTimes(1);
  });

  test('renders album details and tracks', () => {
    renderDetail({
      data: {
        album: [{ strAlbum: 'Siente', strArtist: 'Shakira', intYearReleased: '2024', strAlbumThumb: 'cover.jpg' }],
        track: [{ idTrack: 'track-1', strTrack: 'Te Felicito' }],
      },
      loading: false,
      error: null,
      refetch: jest.fn(),
    });

    expect(screen.getByRole('heading', { name: 'Siente' })).toBeInTheDocument();
    expect(screen.getByText('Shakira')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Te Felicito')).toBeInTheDocument();
  });
});
