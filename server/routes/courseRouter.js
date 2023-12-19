const Router = require('express')
const router = new Router()
const courseController = require('../controllers/courseController')

router.delete('/delete', courseController.delete)
router.get('/all', courseController.all)
router.post('/create', courseController.create)
router.put('/update', courseController.update)
router.get('/allByRole', courseController.allByRole)

module.exports = router