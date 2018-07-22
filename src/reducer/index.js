import * as types from "../constant/ActionType";
import * as filterTypes from "../constant/FilterType";

export default (
    state = {
        todos: [],
        filter: filterTypes.DEFAULT
    },
    action
) => {
    switch (action.type) {
        case types.ADDITION: {
            // const newState=[
            //     ...state,
            //     {
            //         id:action.id,
            //         text: action.text,
            //         completed: false
            //     }
            // ]
            // newState = [...action.todos]
            return { ...state, todos: [...action.todos] };
        }

        case types.TOGGLE: {
            //const newState=state.map(s => toggleTask(s, action))
            return { ...state, todos: [...action.todos] };
        }
        case types.EDITION: {
            return { ...state, todos: [...action.todos] };
        }
        case types.FILTER: {
            return { todos: [...action.todos], filter: action.filter };
        }
        default:
            return state;
    }
};

// const toggleTask = (task, action) => {
//     if (task.id !== action.id) {
//         return task
//     }
//     return {
//         ...task,
//         completed: task.completed ? false : true
//     }
// }
