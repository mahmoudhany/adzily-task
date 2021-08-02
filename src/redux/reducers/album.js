import { albums } from '../../components/data';
import * as actions from '../actions/actionTypes'

const initialState = albums

function albumReducer(state = initialState, action) {
  switch (action.type) {

    case actions.SELECT_ALBUM:
      return state.map((album) => (
        album.id === action.payload ?
          ({ ...album, isSelected: !album.isSelected })
          : album
      ))
    case actions.RESET_ALBUMBS:
      return albums;
    default:
      return state;
  }

};

export default albumReducer;
