
const mongoose = require("mongoose")

shortnerurl = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },  

    shortner: {
        type: String,
        required: true
    },

    clickedhistory: [{ timestamp: Date }]
}, { timestamps: true })

const urlmodel = mongoose.model("urlshortner", shortnerurl)
module.exports = urlmodel;