import * as filterTypes from "../constant/FilterType"

export default class Todo{

    constructor(content){
        this.content = content
        this.status = filterTypes.ACTIVE
        this.id = new Date().getTime()
    }


    toggleActive() {
        this.status = (this.status===filterTypes.ACTIVE)?filterTypes.COMPLETE:filterTypes.ACTIVE
    }
}
