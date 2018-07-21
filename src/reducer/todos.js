import * as types from "../constant/ActionType"

export default (state = [], action) => {
    switch (action.type) {
        case types.ADDITION:{
            // const newState=[
            //     ...state,
            //     {
            //         id:action.id,
            //         text: action.text,
            //         completed: false
            //     }
            // ]
            // newState = [...action.todos]
            return [...action.todos]
        }

        case types.TOGGLE:{
            //const newState=state.map(s => toggleTask(s, action))
            return [...action.todos]
        }
        case types.EDITION:{
            const newState=[...state]
            const target=newState.find(t=>t.id==action.id)
            target.text=action.text
            return newState
        }
        default:
            return state
    }
}

const toggleTask = (task, action) => {
    if (task.id !== action.id) {
        return task
    }
    return {
        ...task,
        completed: task.completed ? false : true
    }
}
