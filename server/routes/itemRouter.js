const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.post('/create', itemController.create)
router.get('/one', itemController.getOne)
router.post('/delete', itemController.delete)
router.get('/update', itemController.update)

module.exports = router