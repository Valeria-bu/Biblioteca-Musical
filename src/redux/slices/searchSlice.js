import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
  loading: false,
  error: null
};

const normalizeAlbum = (album) => ({
  id: album.collectionId || `${album.artistName || 'artist'}-${album.collectionName || 'album'}`,
  title: album.collectionName || 'Álbum sin título',
  artist: album.artistName || 'Artista desconocido',
  album: album.collectionName || 'Álbum',
  duration: 'N/A',
  cover: album.artworkUrl100 || '',
  thumbnail: album.artworkUrl100 || ''
});

const normalizeArtist = (artist) => ({
  id: artist.artistId || `${artist.artistName || 'artist'}-artist`,
  title: artist.artistName || 'Artista sin nombre',
  artist: artist.artistName || 'Artista desconocido',
  album: 'Artista',
  duration: 'N/A',
  cover: artist.artworkUrl100 || '',
  thumbnail: artist.artworkUrl100 || ''
});

export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (query, { rejectWithValue }) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return [];
    }

    try {
      const [artistResponse, albumResponse] = await Promise.all([
        fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(trimmedQuery)}&entity=musicArtist`),
        fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(trimmedQuery)}&entity=album`)
      ]);

      if (!artistResponse.ok || !albumResponse.ok) {
        throw new Error('No se pudo completar la búsqueda de artistas y álbumes.');
      }

      const artistData = await artistResponse.json();
      const albumData = await albumResponse.json();

      const artists = Array.isArray(artistData?.results)
        ? artistData.results.filter((item) => item.wrapperType === 'artist')
        : [];
      const albums = Array.isArray(albumData?.results)
        ? albumData.results.filter((item) => item.wrapperType === 'collection')
        : [];

      const mergedResults = [
        ...artists.map(normalizeArtist),
        ...albums.map(normalizeAlbum)
      ];

      const uniqueResults = mergedResults.filter(
        (item, index, array) =>
          array.findIndex((candidate) => candidate.id === item.id && candidate.title === item.title) === index
      );

      return uniqueResults;
    } catch (error) {
      return rejectWithValue(error.message || 'No se pudo completar la búsqueda.');
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.error = null;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'No se pudo completar la búsqueda.';
        state.results = [];
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
