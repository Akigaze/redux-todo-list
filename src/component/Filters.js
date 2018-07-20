import React, { Component } from "react"
import * as filterTypes from "../constant/FilterType"
import "../css/todo.css"

export default class Filters extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentFilter, filterTask } = this.props
    return (
      <div>
        <ul id="filters">
          <li>
            <a
              href="#"
              className={currentFilter === filterTypes.DEFAULT ? "selected" : " "}
              onClick={() => filterTask(filterTypes.DEFAULT)}
            >
              all
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentFilter === filterTypes.ACTIVE ? "selected" : " "}
              onClick={() => filterTask(filterTypes.ACTIVE)}
            >
              active
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentFilter === filterTypes.COMPLETE ? "selected" : " "}
              onClick={() => filterTask(filterTypes.COMPLETE)}
            >
              complete
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
