const TodoAPI={
    const todos=[{id:111,text:"小猪佩奇",completed:false}]
    toggleActive=(id)={
        const todo=todos.find(t=>t.id==id)
        todo.completed=!todo.completed
        return todo
    }
}
export default TodoAPI
