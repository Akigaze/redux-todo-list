import * as types from "../constant/ActionType"

export const addition = todos => {
    return {
        type: types.ADDITION,
        todos
    }
}
export const toggle = todo => {
    return {
        type: types.TOGGLE,
        todo
    }
}
export const filter = (todos,filterName) => {
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
export const initation = todos => {
    return {
        type: types.INITATION,
        todos
    }
}
