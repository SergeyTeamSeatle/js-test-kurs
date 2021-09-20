let action = require("./action")
let path = require("./path.json")

action.CreateFolder(path.dirFirst,function (callback) {
    console.log(callback)
     action.CreateFile(path.dirFirst+"/"+path.fileName,function (callback) {  
        console.log(callback)      
        action.CreateFolder(path.dirSecond,function (callback) {
            console.log(callback)   
            action.Check(path.fileDirFirst,function (callback) {  
                console.log(callback)  
                action.Move(path.dirFirst+"/"+path.fileName,path.dirSecond+"/"+path.fileName,function (callback) {
                    console.log(callback)  
                    action.Remove(path.fileDirSecond)
                    action.Remove(path.dirFirst)
                    action.Remove(path.dirSecond)
                })    
            })
        })
    })
})
