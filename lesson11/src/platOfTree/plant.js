const Tree = require("./tree")

class Plant extends Tree{
    constructor(type,planting) {
        super(type)
        this.planting=planting;
        this.cuted=false
    }
    getPlantingTree(){
        return this.planting
    }
    cutTree()
    {
        this.cuted=true
    }

}

module.exports = Plant