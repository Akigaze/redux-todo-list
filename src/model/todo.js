export default class Todo{

    constructor(content){
        this.text = content
        this.completed = false
        this.id = new Date().getTime()
    }


    toggleActive() {
        this.status = this.status === Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE
    }
}
