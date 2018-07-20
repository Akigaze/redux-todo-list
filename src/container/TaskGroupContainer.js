import TaskGroup from "../component/TaskGroup"
import { connect } from "react-redux"
import { toggle } from "../action/index"

function getTasksByFilter(todos, filter) {
  switch (filter) {
    case "ACTIVE":{
        const filterTodos=todos.filter(t => !t.completed)
        return filterTodos
    }

    case "COMPLETE":{
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
