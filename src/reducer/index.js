import * as types from "../constant/ActionType";
import * as filterTypes from "../constant/FilterType";
import todoApi from "../api/TodoResourceAPI";

export default (
    state = {
        todos: [],
        filter: filterTypes.DEFAULT
    },
    action
) => {
    switch (action.type) {
        case types.ADDITION: {
            return { ...state, todos: [...action.todos] };
        }
        case types.TOGGLE: {
            const {todos,filter}=state
            const newState={todos:[...todos],filter}
            newState.todos.find(t=>t.id===action.todo.id).status=action.todo.status
            return newState
            //return { ...state, todos: [...action.todos] };
        }
        case types.EDITION: {
            return { ...state, todos: [...action.todos] };
        }
        case types.FILTER: {
            return { todos: [...action.todos], filter: action.filter };
        }
        case types.INITATION: {
            return { ...state, todos: [...action.todos] };
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
