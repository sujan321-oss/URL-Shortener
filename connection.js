
const mongoose=require("mongoose")

async function connectWithDatabase(dburi){
   await mongoose.connect(dburi)
     
}

module.exports={
    connectWithDatabase,

}