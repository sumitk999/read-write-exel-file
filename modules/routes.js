const router = require('express').Router()
const sheetController = require('./controller')
router.post('/saveData',sheetController.saveData)
router.get('/getSheet',sheetController.generateSheet)

module.exports= router