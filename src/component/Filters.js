import React, { Component } from "react"
import * as filterTypes from "../constant/FilterType"
import "../css/todo.css"

export default class Filters extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentFilter, filterTodo } = this.props
    return (
      <div>
        <ul id="filters">
          <li>
            <a
              href="#"
              className={currentFilter === filterTypes.DEFAULT ? "selected" : " "}
              onClick={() => filterTodo(filterTypes.DEFAULT)}
            >
              all
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentFilter === filterTypes.ACTIVE ? "selected" : " "}
              onClick={() => filterTodo(filterTypes.ACTIVE)}
            >
              active
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentFilter === filterTypes.COMPLETE ? "selected" : " "}
              onClick={() => filterTodo(filterTypes.COMPLETE)}
            >
              complete
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
