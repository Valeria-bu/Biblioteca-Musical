import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const songAlreadyExists = state.some((song) => song.id === action.payload.id);

      if (!songAlreadyExists) {
        state.push(action.payload);
      }
    },
    removeSong: (state, action) => state.filter((song) => song.id !== action.payload)
  }
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;
