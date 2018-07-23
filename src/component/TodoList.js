import React, { Component } from "react"
import TodoGroup from "../container/TodoGroupContainer"
import InputBox from "../container/InputBoxContainer"
import Filters from "../container/FiltersContainer"
import {BrowserRouter,Route,Link} from "react-router-dom"
import * as filterTypes from "../constant/FilterType"
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
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={TodoGroup}/>
                            <Route path="/:status" component={TodoGroup}/>
                        </div>
                    </BrowserRouter>
                    <Filters />
                </div>
            </div>
        )
    }
}
