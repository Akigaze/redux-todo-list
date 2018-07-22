import React, { Component } from "react"
import Task from "./Task"
import "../css/todo.css"

export default class TaskGroup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todos, toggleTask ,confirmEdite} = this.props
        let tasks = todos.map(t => (
            <Task
                id={t.id}
                status={t.status}
                content={t.content}
                toggleTask={toggleTask}
                confirmEdite={confirmEdite}
            />
        ))

        return <ol className="task">{tasks}</ol>
    }
}
