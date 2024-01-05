const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.post('/create', itemController.create)
router.get('/one', itemController.getOne)
router.post('/delete', itemController.delete)
router.post('/update', itemController.update)
router.post('/addFile', itemController.addFile)

module.exports = router