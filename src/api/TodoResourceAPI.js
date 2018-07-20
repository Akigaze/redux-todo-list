const TodoAPI={
    const todos=[];
    toggleActive=(id)={
        const todo=todos.find(t=>t.id==id)
        todo.completed=!todo.completed
        return todo
    }
}
export default TodoAPI
