import * as actions from './actionTypes'

export const selectSinger = (id) => {
  return {
    type: actions.SELECT_SINGER,
    payload: id
  }
}

export const resetSingers = () => {
  return {
    type: actions.RESET_SINGERS
  }
}
