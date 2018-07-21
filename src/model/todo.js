export default class Todo{

    constructor(content){
        this.text = content
        this.completed = false
        this.id = new Date().getTime()
    }


    toggleActive() {
        this.completed = !this.completed
    }
}
