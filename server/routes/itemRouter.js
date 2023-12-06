const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.post('/all', itemController.all)
router.post('/delete', itemController.delete)
router.get('/update', itemController.update)

module.exports = router