//import Todo from "../model/todo";
import * as filterTypes from "../constant/FilterType";
import { addition, toggle, filter, edition } from "../action/index";
const axios = require("axios");

const todoApi = {
    todos: [],
    filter: filterTypes.DEFAULT,

    // initState() {
    //     axios
    //         .get("http://localhost:8080/api/todos")
    //         .then(response => {
    //             const todostemp = response.data._embedded.todos.map(t => {
    //                 const { id, content, status } = t;
    //                 return { id, content, status };
    //             });
    //         })
    //         .catch(function(error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function() {
    //             // always executed
    //         });
    //     return [];
    // },
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
    getRequest(callback, getAction) {
        const path = this.getPathByFilter();
        axios
            .get(path)
            .then(response => {
                this.todos = response.data._embedded.todos.map(t => {
                    const { id, content, status } = t;
                    return { id, content, status };
                });
                //this.filerByStatus();
                callback(getAction(this.todos));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    add(item, callback) {
        const { id, content, status } = item;
        axios
            .post("http://localhost:8080/api/todos", { id: 1, content, status })
            .then(response => {
                console.log(response);
                this.getRequest(callback, addition);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    changeFilter(selection) {
        this.filter = selection;
        return this.filerByStatus();
    },

    filerByStatus() {
        switch (this.filter) {
            case filterTypes.ACTIVE: {
                const filterTodos = this.todos.filter(
                    t => t.status === filterTypes.ACTIVE
                );
                return filterTodos;
            }

            case filterTypes.COMPLETE: {
                const filterTodos = this.todos.filter(
                    t => t.status === filterTypes.COMPLETE
                );
                return filterTodos;
            }
            default:
                return this.todos;
        }
    },
    toggleActive(id, status, callback) {
        const newStatus =
            (status === filterTypes.ACTIVE)
                ? filterTypes.COMPLETE
                : filterTypes.ACTIVE;
        axios
            .patch(`http://localhost:8080/api/todos/${id}`, {
                status: newStatus
            })
            .then(response => {
                this.getRequest(callback, toggle);
            });
        return this.filerByStatus();
    },
    updateItemContent(id, content) {
        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.content = content;
        }
        return this.filerByStatus();
    }
};
export default todoApi;
