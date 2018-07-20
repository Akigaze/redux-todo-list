import * as types from "../constant/ActionType"

let nextTaskId = 0
export const addition = text => {
  return {
    type: types.ADDITION,
    id: nextTaskId++,
    text
  }
}
export const toggle = id => {
  return {
    type: types.TOGGLE,
    id
  }
}
export const filter = filterName => {
  return {
    type: types.FILTER,
    filter:filterName
  }
}
