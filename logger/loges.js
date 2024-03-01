
const fs=require("fs")
const path=require("path")

const mainpath=path.resolve(__dirname,"..")


const connectStatusLog=(filename,error)=>{
    fs.appendFile(`${mainpath}/logfiles/${filename}`,`${error}`,(er)=>{
        if (er) console.log("error occured while appending file in logger.js"+er)
    })

}


module.exports={
    connectStatusLog,

}