import InputBox from "../component/InputBox"
import { connect } from "react-redux"
import { addition } from "../action/index"

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTask: text => dispatch(addition(text.current.value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputBox)
