import { singers } from '../../components/data';
import * as actions from '../actions/actionTypes'

const initialState = singers;


function singerReducer(state = initialState, action) {
  switch (action.type) {

    case actions.SELECT_SINGER:
      return state.map((singer) => (
        singer.id === action.payload ? ({ ...singer, isSelected: !singer.isSelected }) : singer
      ));

    case actions.RESET_SINGERS:
      return singers;
    default:
      break;
  }
  return state;
};

export default singerReducer;
