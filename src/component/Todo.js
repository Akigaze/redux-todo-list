import React, { Component } from "react"
import * as filterTypes from '../constant/FilterType'
import "../css/todo.css"

export default class Todo extends Component {
    constructor(props) {
        super(props)
    }
    edit=(event)=>{
        event.target.setAttribute("contentEditable","true");
    }
    update=(id,event)=>{
        const key=event.key
        if(key==="Enter"){
            this.props.confirmEdite(id,event.currentTarget.innerText)
            event.target.setAttribute("contentEditable","false");

        }
    }
    render() {
        const { id, toggleTodo, status, content } = this.props
        return (
            <li className={status==="completed" ? "checked" : "none"}>
                <input
                    type="checkbox"
                    className="done-todo"
                    onClick={() => toggleTodo(id,status)}
                    checked={status==="completed" ? "checked" : ""}
                />
            <span onDoubleClick={this.edit} onKeyPress={(event)=>{this.update(id,event)}}>{content}</span>
            </li>
        )
    }
}
