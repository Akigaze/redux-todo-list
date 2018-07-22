import Filters from "../component/Filters"
import { connect } from "react-redux"
import { filter } from "../action/index"
import todoApi from "../api/TodoResourceAPI"
import Todo from "../model/todo.js"

const mapStateToProps = (state, ownProps) => {
    return {
        currentFilter: state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        filterTodo: status => {
            const todos=todoApi.changeFilter(status,dispatch)
            //dispatch(filter(status,todos))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters)
