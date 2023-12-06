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
})

const Course = sequelize.define('Courses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING },
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

const Block = sequelize.define('Block', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_parent: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Item = sequelize.define('Item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_parent: {type: DataTypes.STRING},
    item: {type: DataTypes.STRING}
})

Course.hasMany(Block)
Block.belongsTo(Course)

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