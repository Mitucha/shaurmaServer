const Router = require('express')
const router = new Router()
const blockController = require('../controllers/blockController')

router.get('/all', blockController.all)
router.get('/allByRole', blockController.allByRole)
router.post('/add', blockController.add)
router.delete('/delete', blockController.delete)
router.get('/quantityByCourse', blockController.quantityByCourse)

module.exports = router