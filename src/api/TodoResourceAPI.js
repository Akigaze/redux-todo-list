import Todo from '../model/todo'
import filterTypes from '../constant/FilterType'

const todoApi = {
    todos: [],
    filter: filterTypes.DEFAULT,
    add(item) {
        this.todos.push(item)
        return filerByStatus()
    },
    changeFilter(selection){
        this.filter=selection
        return filerByStatus()
    }
    filerByStatus() {
        switch (this.filter) {
            case filterTypes.ACTIVE: {
                const filterTodos = this.todos.filter(t => !t.completed)
                return filterTodos
            }

            case filterTypes.COMPLETE: {
                const filterTodos = this.todos.filter(t => t.completed)
                return filterTodos
            }
            default:
                return this.todos
        }
    },
    toggleActive(id) {
        let todo = this.todos.find(item => item.id === id)
        if (todo !== undefined) {
            todo.toggleActive()
        }
        return filerByStatus()

    },
    updateItemContent(id, content) {
        let todo = this.todos.find(item => item.id === viewId)
        if (todo !== undefined) {
            todo.text = content
        }
        return filerByStatus()
        
    }
}
export default todoApi
