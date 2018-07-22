import React, { Component } from "react"
import * as filterTypes from '../constant/FilterType'
import "../css/todo.css"

export default class Task extends Component {
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
        const { id, toggleTask, status, content } = this.props
        return (
            <li className={status==="completed" ? "checked" : "none"}>
                <input
                    type="checkbox"
                    className="done-todo"
                    onClick={() => toggleTask(id)}
                    checked={status==="completed" ? "checked" : ""}
                />
            <span onDoubleClick={this.edit} onKeyPress={(event)=>{this.update(id,event)}}>{content}</span>
            </li>
        )
    }
}
