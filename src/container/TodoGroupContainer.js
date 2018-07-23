import TodoGroup from "../component/TodoGroup"
import { connect } from "react-redux"
import { toggle, edition } from "../action/index"
import * as filterTypes from "../constant/FilterType"
import todoApi from "../api/TodoResourceAPI"
import Todo from "../model/todo.js"

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

const mapStateToProps = (state, ownProps) => {
    let filter=ownProps.match.params.status
    const todoObjs=getTodosByFilter(state.todos,filter)
    return {
        todoObjs
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodo: (id,status) => {
            todoApi.toggleActive(id,status,dispatch)
        },
        confirmEdite: (id, content) => {
            const todos=todoApi.updateItemContent(id,content,dispatch)
            //dispatch(edition(todos))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoGroup)
