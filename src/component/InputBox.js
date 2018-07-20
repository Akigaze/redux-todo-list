import React, { Component } from "react"
import "../css/todo.css"

export default class InputBox extends Component {
  constructor(props) {
    super(props)
    this.text = React.createRef()
  }
  add=()=>{
      if(this.text.current.value.trim()===""){
          this.text.current.value=""
          return
      }
      const { createTask } = this.props
      createTask(this.text)
      this.text.current.value=""
  }
  render() {
    return (
      <div>
        <input
          className="input-text"
          type="text"
          name="ListItem"
          ref={this.text}
        />
    <div id="button" onClick={this.add}>
          Add
        </div>
      </div>
    )
  }
}
