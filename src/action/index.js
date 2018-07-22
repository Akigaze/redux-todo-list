import * as types from "../constant/ActionType"

export const addition = todos => {
    const a = {
        type: types.ADDITION,
        todos
    }
    return a
}
export const toggle = todos => {
    return {
        type: types.TOGGLE,
        todos
    }
}
export const filter = (filterName,todos) => {
    return {
        type: types.FILTER,
        filter: filterName,
        todos
    }
}
export const edition = todos => {
    return {
        type: types.EDITION,
        todos
    }
}
