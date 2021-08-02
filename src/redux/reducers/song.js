import { songs } from '../../components/data';
import * as actions from '../actions/actionTypes'

const initialState = songs


function songReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_SONG:
      return state.map((song) => (
        song.id === action.payload ? ({ ...song, isSelected: !song.isSelected }) : song
      ));
    case actions.RESET_SONGS:
      return songs;
    default:
      break;
  }
  return state;
};

export default songReducer;
