//import Todo from "../model/todo";
import * as filterTypes from "../constant/FilterType";
import { addition } from "../action/index";
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
    getRequest(callback) {
        axios
            .get("http://localhost:8080/api/todos")
            .then(response => {
                this.todos = response.data._embedded.todos.map(t => {
                    const { id, content, status } = t;
                    return { id, content, status };
                });
                this.filerByStatus();
                callback(addition(this.todos));
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
                this.getRequest(callback);
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
    toggleActive(id, callback) {
        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.status =
                todo.status === filterTypes.ACTIVE
                    ? filterTypes.COMPLETE
                    : filterTypes.ACTIVE;
            axios.patch(`http://localhost:8080/api/todos/${id}`, {
                status: todo.status
            });
        }
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
