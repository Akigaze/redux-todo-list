import React, { Component } from "react"
import * as filterTypes from '../constant/FilterType'
import "../css/todo.css"
import { Checkbox } from 'antd';

export default class Todo extends Component {
    constructor(props) {
        super(props)
    }
    edit=(event)=>{
        event.target.setAttribute("contentEditable","true");
        event.target.focus()
    }
    update=(id,event)=>{
        const key=event.key
        if(key==="Enter"){
            this.props.confirmEdite(id,event.currentTarget.innerText)
            event.target.setAttribute("contentEditable","false");

        }
    }
    onChange=(e) =>{
      console.log(`checked = ${e.target.checked}`);
    }
    render() {
        const { id, toggleTodo, status, content } = this.props
        return (

            <li className={status==="completed" ? "checked" : "none"}>
                <Checkbox onChange={this.onChange} onClick={() => toggleTodo(id,status)}
                checked={status==="completed" ? "checked" : ""}></Checkbox>

                
            <span onDoubleClick={this.edit} onKeyPress={(event)=>{this.update(id,event)}}>{content}</span>
            </li>
        )
    }
}
