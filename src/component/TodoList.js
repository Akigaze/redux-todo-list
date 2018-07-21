import React, { Component } from "react"
import TaskGroup from "../container/TaskGroupContainer"
import InputBox from "../container/InputBoxContainer"
import Filters from "../container/FiltersContainer"

import "../css/todo.css"

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <div>
                    <h2>React & Redux To Do List</h2>
                    <p>
                        <em>
                            Simple Todo List with adding and filter by diff
                            status.
                        </em>
                    </p>
                </div>
                <div>
                    <InputBox ref={this.value} />
                    <TaskGroup />
                    <Filters />
                </div>
            </div>
        )
    }
}
