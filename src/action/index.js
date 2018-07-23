import * as types from "../constant/ActionType"

export const addition = todo => {
    return {
        type: types.ADDITION,
        todo
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
export const edition = todo => {
    return {
        type: types.EDITION,
        todo
    }
}
export const initation = todos => {
    return {
        type: types.INITATION,
        todos
    }
}
