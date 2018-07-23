import React, { Component } from "react";
import "../css/todo.css";
import { Button,Input } from "antd";
import "antd/dist/antd.css";

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.text = React.createRef();
    }
    add = () => {
        if (this.text.current.value.trim() === "") {
            this.text.current.value = "";
            return;
        }
        const { createTodo } = this.props;
        createTodo(this.text);
        this.text.current.value = "";
    };
    render() {
        return (
            <div className="add">
                <input
                    className="input-text"
                    size="small"
                    name="ListItem"
                    ref={this.text}
                />
                <Button id="button" type="primary" onClick={this.add}>
                    Add
                </Button>
            </div>
        );
    }
}
