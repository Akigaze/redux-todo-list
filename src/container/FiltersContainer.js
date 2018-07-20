import Filters from "../component/Filters"
import { connect } from "react-redux"
import { filter } from "../action/index"

const mapStateToProps = (state, ownProps) => {
    return {
        currentFilter: state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        filterTask: status => dispatch(filter(status))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters)
