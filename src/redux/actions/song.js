import * as actions from './actionTypes'

export const selectSong = (id) => {
  return {
    type: actions.SELECT_SONG,
    payload: id
  }
}

export const resetSongs = () => {
  return {
    type: actions.RESET_SONGS
  }
}
