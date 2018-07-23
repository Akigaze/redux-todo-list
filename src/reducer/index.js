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
            const {todos,filter}=state
            const newTodos=[...todos]
            newTodos.push(action.todo)
            return {todos:getTodosByFilter(newTodos, state.filter),filter}
        }
        case types.TOGGLE: {
            const {todos,filter}=state
            const newTodos=[...todos]
            newTodos.find(t=>t.id===action.todo.id).status=action.todo.status
            return {todos:getTodosByFilter(newTodos, state.filter),filter}
            //return { ...state, todos: [...action.todos] };
        }
        case types.EDITION: {
            const {todos,filter}=state
            const newTodos=[...todos]
            newTodos.find(t=>t.id===action.todo.id).content=action.todo.content
            return {todos:newTodos,filter}
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

function getTodosByFilter(todos, filter) {
    switch (filter) {
        case filterTypes.ACTIVE: {
            const filterTodos = todos.filter(t => t.status===filterTypes.ACTIVE)
            return filterTodos
        }

        case filterTypes.COMPLETE: {
            const filterTodos = todos.filter(t => t.status===filterTypes.COMPLETE)
            return filterTodos
        }
        default:
            return todos
    }
}
