const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login',userController.login)
router.put('/update', userController.update)
router.get('/all', userController.all)

module.exports = router