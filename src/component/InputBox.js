import React, { Component } from "react";
import "../css/todo.css";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import { Row, Col } from 'antd'

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.text = React.createRef();
    }
    add = () => {
        console.log(this.text.current.input.value);
        if (this.text.current.input.value.trim() === "") {
            this.text.current.input.value = "";
            return;
        }
        const { createTodo } = this.props;
        createTodo(this.text.current.input.value);
        this.text.current.input.value = "";
    };
    render() {
        return (
            <div className="add">
                <Row gutter="4">
                    <Col span={19}>
                        <Input
                            className="input-text"
                            name="ListItem"
                            ref={this.text}
                        />
                    </Col>
                    <Col span={4}>
                        <Button id="button" type="primary" onClick={this.add}>
                            Add
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
