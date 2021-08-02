import * as actions from './actionTypes'

export const selectAlbum = (id) => {
  return {
    type: actions.SELECT_ALBUM,
    payload: id
  }
};

export const resetAlbums = () => {
  return {
    type: actions.RESET_ALBUMBS,
  }
};
