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



    res.json({"shortner":`http://localhost:8001/urlshort/${shortner}`})


})


router.get("/:id",async (req,res)=>{
  const shortner=req.params.id;
  
  const data=await db.findOneAndUpdate({shortner:shortner},{
    $push:{
      clickedhistory:{timestamp:Date.now()},
    }
  })


  res.redirect(data.url)



})


router.get("/clickcounts/:id",async (req,res)=>{
  const  id=req.params.id;

  const data=await db.findOne({
    shortner:id
  })
  .then((data)=>res.json(data.clickedhistory.length))
  .catch((err)=>res.json(err))

})





module.exports={
  router,

}