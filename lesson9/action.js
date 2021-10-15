const fs = require('fs-extra')

exports.CreateFolder =CreateFolder
function CreateFolder(path,callback){
    fs.emptyDir(path, err => {
        if (err) return console.error(err)
        callback('dir created')
      })
}

exports.Remove =Remove
function Remove(path){
    fs.remove(path, err => {
        if (err) return console.error(err)
        console.log('remove '+path+' is success!')
      })
}

exports.CreateFile =CreateFile
function CreateFile(path,callback){
    fs.ensureFile(path, err => {
        if (err) return console.error(err)
        callback('File created!')
      })
}

exports.Move =Move
function Move(path,pathTo,callback){
    fs.move(path, pathTo, err => {
        if (err) return console.error(err)
        callback('Move success !')
      })
}

exports.Check =Check
function Check(path,callback){
    fs.pathExists( path,(err,exists)  =>  {         
        if (err) return console.error(err)
        if (exists==false) Check (path)
        else callback("file exist")
    })
        
}