
const express=require("express")
const {urlmodel}=require("./models/urlshotnermodels")
const {connectStatusLog}=require("./logger/loges")
const {connectWithDatabase}=require("./connection")


const app=express()
PORT=8001

app.listen(PORT,()=>{
    console.log(`Server Started at PORT:${PORT}`);
})



app.use(async (req,res,next)=>{
    const dburi="mongodb://127.0.0.1:27017/"
    await connectWithDatabase(dburi)
      .then((data)=>console.log("connected to the database"))
      .catch((err)=>connectStatusLog("databaseconnection.log",err))
    
    next()

})

