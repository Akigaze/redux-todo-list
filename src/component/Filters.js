import React, { Component } from "react";
import "../css/todo.css";

export default class Filters extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentFilter, filterTask } = this.props;
    return (
      <div>
        <ul id="filters">
          <li>
            <a
              href="#"
              className={currentFilter === "ALL" ? "selected" : " "}
              onClick={() => filterTask("ALL")}
            >
              all
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentFilter === "ACTIVE" ? "selected" : " "}
              onClick={() => filterTask("ACTIVE")}
            >
              active
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentFilter === "COMPLETE" ? "selected" : " "}
              onClick={() => filterTask("COMPLETE")}
            >
              complete
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
