import React, { Component } from "react"
import Task from "./Task"
import "../css/todo.css"

export default class TaskGroup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todos, toggleTask } = this.props
        let tasks = todos.map(t => (
            <Task
                id={t.id}
                completed={t.completed}
                text={t.text}
                toggleTask={toggleTask}
            />
        ))

        return <ol className="task">{tasks}</ol>
    }
}
