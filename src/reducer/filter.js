import * as types from "../constant/ActionType"
import * as filters from "../constant/FilterType"

export default (state = filters.DEFAULT, action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter
    default:
      return state
  }
}
