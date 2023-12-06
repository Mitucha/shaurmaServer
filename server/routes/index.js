const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const courseRouter = require('./courseRouter')
const blockRouter = require('./blockRouter')
const itemRouter = require('./itemRouter')
const roleRouter = require('./roleRouter')

router.use('/user', userRouter)
router.use('/course', courseRouter)
router.use('/block', blockRouter)
router.use('/item', itemRouter)
router.use('/role', roleRouter)

module.exports = router