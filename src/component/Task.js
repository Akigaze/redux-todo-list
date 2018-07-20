import React, { Component } from "react"
import "../css/todo.css"

export default class Task extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, toggleTask, completed, text } = this.props
        return (
            <li className={completed == "complete" ? "checked" : "none"}>
                <input
                    type="checkbox"
                    className="done-todo"
                    onClick={() => toggleTask(id)}
                    checked={completed == "complete" ? "checked" : ""}
                />
                <span>{text}</span>
            </li>
        )
    }
}
