import Todo from "../model/todo";
import * as filterTypes from "../constant/FilterType";
const axios = require("axios");
const todoApi = {
    todos: [],
    filter: filterTypes.DEFAULT,
    getHttp() {
        axios;
        axios
            .get("http://5b531c68d9b92700141c9ada.mockapi.io/todo")
            .then(function(response) {
                // handle success
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    },

    add(item) {
        this.todos.push(item);
        return this.filerByStatus();
    },
    changeFilter(selection) {
        this.filter = selection;
        return this.filerByStatus();
    },

    filerByStatus() {
        switch (this.filter) {
            case filterTypes.ACTIVE: {
                const filterTodos = this.todos.filter(t => !t.completed);
                return filterTodos;
            }

            case filterTypes.COMPLETE: {
                const filterTodos = this.todos.filter(t => t.completed);
                return filterTodos;
            }
            default:
                return this.todos;
        }
    },
    toggleActive(id) {
        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.toggleActive();
        }
        return this.filerByStatus();
    },
    updateItemContent(id, content) {
        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.text = content;
        }
        return this.filerByStatus();
    }
};
export default todoApi;
