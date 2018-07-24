import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/todo.css";
import TodoList from "./component/TodoList";
import { Row, Col } from 'antd'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={3}></Col>
                    <TodoList />
                    <Col span={6}> </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        );
    }
}

export default App;
