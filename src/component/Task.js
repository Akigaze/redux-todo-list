import React, { Component } from "react"
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
        const { id, toggleTask, completed, text } = this.props
        return (
            <li className={completed ? "checked" : "none"}>
                <input
                    type="checkbox"
                    className="done-todo"
                    onClick={() => toggleTask(id)}
                    checked={completed ? "checked" : ""}
                />
            <span onDoubleClick={this.edit} onKeyPress={(event)=>{this.update(id,event)}}>{text}</span>
            </li>
        )
    }
}
