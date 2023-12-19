require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.static('static'))
app.use(errorHandler)



const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер стартовал на порту: ${PORT}`))
    } catch(e){
        console.log('Что-то пошло не так: ', e)
    }
}  

start()