import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import todo from "./reducer/index";
import { Provider } from "react-redux";
import todoApi from "./api/TodoResourceAPI"
console.log("hahah")
const store = createStore(todo);
todoApi.initState(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
