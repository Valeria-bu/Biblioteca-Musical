import { ADD_SONG, REMOVE_SONG } from './libraryActions';

const initialState = [];

function libraryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      return state.some((song) => song.id === action.payload.id)
        ? state
        : [...state, action.payload];
    case REMOVE_SONG:
      return state.filter((song) => song.id !== action.payload);
    default:
      return state;
  }
}

export default libraryReducer;
