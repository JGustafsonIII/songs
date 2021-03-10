import { combineReducers } from 'redux';
// Reducers
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '1:40' },
    { title: 'Macarena', duration: '2:40' },
  ];
};

const selectedSongReducer = (currentlySelected = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  } else {
    return currentlySelected;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
