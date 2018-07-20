let nextTaskId = 0
export const addition = text => {
  return {
    type: "ADD",
    id: nextTaskId++,
    text
  }
}
export const toggle = id => {
  return {
    type: "CHECK",
    id
  }
}
export const filter = filterName => {
  return {
    type: "SET_FILTER",
    filter:filterName
  }
}
