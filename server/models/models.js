const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Role = sequelize.define( 'role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true}
})    

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    access: {type: DataTypes.BOOLEAN, defaultValue: false},
    id_role: {type: DataTypes.INTEGER},
    level: {type: DataTypes.STRING, defaultValue: '[1, 1]'}
})

const Course = sequelize.define('Courses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING },
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    id_role: {type: DataTypes.INTEGER}
})

const Block = sequelize.define('Block', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_parent: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
})

const Item = sequelize.define('Item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_parent: {type: DataTypes.INTEGER},
    item: {type: DataTypes.TEXT},
    test: {type: DataTypes.TEXT},
    files: {type: DataTypes.TEXT}
})

Course.hasMany(Block)
Block.belongsTo(Course)

Role.hasMany(Course)
Course.belongsTo(Role)

Role.hasMany(User)
User.belongsTo(Role)

Block.hasOne(Item)
Item.belongsTo(Block)

module.exports = {
    User,
    Course,
    Block,
    Item,
    Role
}