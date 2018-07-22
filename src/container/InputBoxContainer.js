import InputBox from "../component/InputBox"
import { connect } from "react-redux"
import { addition } from "../action/index"
import todoApi from "../api/TodoResourceAPI"
import Todo from "../model/todo.js"

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTodo: text => {
            const todos=todoApi.add(new Todo(text.current.value),dispatch)
            //dispatch(addition(todos))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)
