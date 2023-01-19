const express = require('express')
const route = require('./modules/routes')
const mongoose  = require('mongoose')
const app = express()
require('./modules/aws')

app.use(express.json())
// var XLSX = require('xlsx')
// var workbook = XLSX.readFile('MyFile.xls');
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// let jsonData = XLSX.utils.sheet_to_json(
//     workbook.Sheets[sheet_name_list[0]]
//   );
// console.log(jsonData);
mongoose.connect('mongodb://localhost:27017/XLSheet_DB')
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
})

app.use('/',route)


app.listen(8080,()=>{
    console.log("server is running on 8080");
})