class Tree{
    constructor(type) {
        this.type=type
        this.size= {
            height: 10,
            diameter: 5
        }
    }
    setTreeSize(size){
        this.size=size
    }
    getTreeSize(){
        return this.size
    }
    getTreeType(){
        return this.type
    }

}

module.exports = Tree