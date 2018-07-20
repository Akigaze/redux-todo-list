import TaskGroup from "../component/TaskGroup"
import { connect } from "react-redux"
import { toggle } from "../action/index"
import * as filterTypes from "../constant/FilterType"

function getTasksByFilter(todos, filter) {
  switch (filter) {
    case filterTypes.ACTIVE:{
        const filterTodos=todos.filter(t => !t.completed)
        return filterTodos
    }

    case filterTypes.COMPLETE:{
        const filterTodos=todos.filter(t => t.completed)
        return filterTodos
    }
    default:
      return todos
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getTasksByFilter(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTask: id => dispatch(toggle(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskGroup)
