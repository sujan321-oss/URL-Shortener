
const express=require("express")
const {urlmodel}=require("./models/urlshotnermodels")
const {connectStatusLog}=require("./logger/loges")
const {connectWithDatabase}=require("./connection")
const {router}=require("./routes/routs")


const app=express()
app.set('view engine', 'ejs');
PORT=8001

app.listen(PORT,()=>{
    console.log(`Server Started at PORT:${PORT}`);
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(async (req,res,next)=>{
    //  make chnages >>>>>>>>>>>>>>>>>
    const dburi="mongodb://127.0.0.1:27017/urlshortner"
    await connectWithDatabase(dburi)
      .then((data)=>console.log("connected to the database"))
      .catch((err)=>connectStatusLog("databaseconnection.log",err))
    
    next()

})


app.use("/urlshort",router)


app.get('/', (req, res) => {
    res.render('index'); 
  });

app.use((req,res)=>{
    res.json({"msg":"404"})
})



