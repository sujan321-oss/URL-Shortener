const express=require("express")
const router=express.Router()
const app=express()
var shortid=require('shortid');
const {saveToDatabase}=require('../controllers/urlinfoandshortner')
const db=require("../models/urlshotnermodels")

router.post("/",async (req,res)=>{
    if (!req.body.url)
      res.status(404).json({"err":"url is required"})

    shortner=shortid.generate();

    await saveToDatabase(db,shortner,req.body.url)
      .then((data)=>console.log("data is saved into the database"))
      .catch((err)=>console.log("unable to save the data into the database"+err))



    res.json({"shortner":shortner})


})







module.exports={
  router,

}