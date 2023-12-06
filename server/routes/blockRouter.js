const Router = require('express')
const router = new Router()
const blockController = require('../controllers/blockController')

router.post('/', blockController.delete)
router.get('/', blockController.all)
router.get('/:id',blockController.change)

module.exports = router