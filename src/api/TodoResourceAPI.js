import Todo from "../model/todo";
import * as filterTypes from "../constant/FilterType";
import { addition } from "../action/index"
const axios = require("axios");


const todoApi = {
    todos: [],
    filter: filterTypes.DEFAULT,

    initState() {
        axios
            .get("http://localhost:8080/api/todos")
            .then((response)=>{
                const todostemp=response.data._embedded.todos.map(t=>{
                    const {id,content,status}=t;
                    return {id,content,status};
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
            return []
    },
    // getHttp() {
    //     axios
    //         .get("http://localhost:8080/api/todos")
    //         .then(function(response) {
    //             // handle success
    //             console.log(response.data._embedded.todos);
    //         })
    //         .catch(function(error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function() {
    //             // always executed
    //         });
    // },

    add(item,callback) {
        this.todos.push(item);
        axios
            .get("http://localhost:8080/api/todos")
            .then((response)=>{
                this.todos=response.data._embedded.todos.map(t=>{
                    const {id,content,status}=t;
                    return {id,content,status};
                });
                this.filerByStatus();
                callback(addition(this.todos));
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
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
            todo.content = content;
        }
        return this.filerByStatus();
    }
};
export default todoApi;
