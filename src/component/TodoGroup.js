import React, { Component } from "react"
import Todo from "./Todo"
import "../css/todo.css"

export default class TodoGroup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todoObjs, toggleTodo ,confirmEdite} = this.props
        let todos = todoObjs.map(t => (
            <Todo
                id={t.id}
                status={t.status}
                content={t.content}
                toggleTodo={toggleTodo}
                confirmEdite={confirmEdite}
            />
        ))

        return <ol className="todo">{todos}</ol>
    }
}
