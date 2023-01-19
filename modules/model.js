const mongoose = require("mongoose")



const sheetSchema  = new mongoose.Schema({
    Sr:Number,
    FName: String,
    LName: String,
    Gender: String,
    Country: String,
    Age: Number,
    Date: String,
    Id: Number
})

module.exports=mongoose.model("Excel_data",sheetSchema)