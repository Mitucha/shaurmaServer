const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login',userController.login)
router.put('/update', userController.update)
router.get('/all', userController.all)
router.delete('/delete', userController.delete)
router.get('user/allByRole', userController.allByRole)
router.post('/updateLevel', userController.updateLevel)
router.get('/userByRole', userController.usersByRole)

module.exports = router