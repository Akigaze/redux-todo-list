export default (state = [], action) => {
    switch (action.type) {
        case "ADD":{
            const newState=[
                ...state,
                {
                    id:action.id,
                    text: action.text,
                    completed: "active"
                }
            ]
            return newState
        }

        case "CHECK":
            const newState=state.map(s => toggleTask(s, action))
            return newState
        default:
            return state
    }
}

const toggleTask = (task, action) => {
    if (task.id !== action.id) {
        return task
    }
    return {
        ...task,
        completed: task.completed === "active" ? "complete" : "active"
    }
}
