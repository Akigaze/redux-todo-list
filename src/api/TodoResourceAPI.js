//import Todo from "../model/todo";
import * as filterTypes from "../constant/FilterType";
import { addition, toggle, filter, edition, initation } from "../action/index";
const axios = require("axios");

const todoApi = {
    //todos: [],
    filter: filterTypes.DEFAULT,

    getPathByFilter() {
        let path = null;
        switch (this.filter) {
            case filterTypes.ACTIVE:
                path =
                    "http://localhost:8080/api/todos/search/statusOfTodos?status=active";
                break;
            case filterTypes.COMPLETE:
                path =
                    "http://localhost:8080/api/todos/search/statusOfTodos?status=completed";
                break;
            default:
                path =
                    "http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active";
        }
        return path;
    },

    getRequest(callback, getAction, other) {
        const path = this.getPathByFilter();
        axios
            .get(path)
            .then(response => {
                const todos = response.data._embedded.todos.map(t => {
                    const { id, content, status } = t;
                    return { id, content, status };
                });
                callback(getAction(todos, other));
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    add(item, callback) {
        const { content, status } = item;
        axios
            .post("http://localhost:8080/api/todos", { content, status })
            .then(response => {
                this.getRequest(callback, addition);
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    changeFilter(newFilter, callback) {
        this.filter = newFilter;
        this.getRequest(callback, filter, newFilter);
    },

    toggleActive(id, status, dispatch) {
        const newStatus =
            status === filterTypes.ACTIVE
                ? filterTypes.COMPLETE
                : filterTypes.ACTIVE;
        axios
            .patch(`http://localhost:8080/api/todos/${id}`, {
                status: newStatus
            })
            .then(response => {
                const {id,content,status}=response.data
                const modifyTodo={id,content,status}
                dispatch(toggle(modifyTodo))
                //this.getRequest(callback, toggle);
            }).catch(function(error) {
                console.log(error);
            });
    },

    updateItemContent(id, newContent, dispatch) {
        axios
            .patch(`http://localhost:8080/api/todos/${id}`, {
                content: newContent
            })
            .then(response => {
                //this.getRequest(callback, edition);
                const {id,content,status}=response.data
                const modifyTodo={id,content,status}
                dispatch(edition(modifyTodo))
            });
    },

    initState(callback) {
        this.getRequest(callback, initation);
    }
};
export default todoApi;
