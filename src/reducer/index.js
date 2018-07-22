import * as types from "../constant/ActionType";
import * as filterTypes from "../constant/FilterType";
import todoApi from "../api/TodoResourceAPI";

export default (
    state = {
        todos: [
            // {
            //     id: 1,
            //     content: "Remove unused imports",
            //     status: "active"
            // },
            // {
            //     id: 2,
            //     content: "Clean the code",
            //     status: "completed"
            // },
            // {
            //     id: 3,
            //     content: "Build the artifacts",
            //     status: "active"
            // },
            // {
            //     id: 4,
            //     content: "Deploy the jar file",
            //     status: "active"
            // }
        ],
        filter: filterTypes.DEFAULT
    },
    action
) => {
    switch (action.type) {
        case types.ADDITION: {
            return { ...state, todos: [...action.todos] };
        }
        case types.TOGGLE: {
            return { ...state, todos: [...action.todos] };
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
