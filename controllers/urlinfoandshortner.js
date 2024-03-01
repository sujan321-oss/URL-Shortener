
const saveToDatabase=async (db,shortid,url)=>{



    await db.create({
        url:url,
        shortner:shortid,
        
    })


    

}

module.exports={
    saveToDatabase

}