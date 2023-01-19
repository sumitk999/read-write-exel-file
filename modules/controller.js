const sheetModel = require('./model')
const XLSX = require('xlsx')
const path = require("path")
const {uploadFile} = require('./aws')

const saveData = async (req, res) => {
    const workbook = XLSX.readFile('MyFile.xls');
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    const response = await sheetModel.create(xlData)
    res.send(response)
}

const generateSheet = async (req, res) => {
    // console.log(req.headers["Authorization"])
    const data = await sheetModel.find()
    const d = []
    data.map(e=>d.push(e.toObject()))
    var worksheet = XLSX.utils.json_to_sheet(d),
        workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook,"demo.xlsx");
    const url = await uploadFile("demo.xlsx","demo.xls")

    res.send(url)
}



module.exports = {
    saveData,
    generateSheet
}