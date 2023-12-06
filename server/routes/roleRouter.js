const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')

router.post('/add', roleController.add)
router.get('/all', roleController.all)

module.exports = router