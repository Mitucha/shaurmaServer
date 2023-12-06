const { Role } = require("../models/models");

class RoleController {
    async add(req, res) {
        const role = req.body.title
        if (!!role) {
            const addRole = await Role.create({title: role})
            return res.json(addRole)
        }else{ return res.json('Необходимое поле пустое') }
    }
    async all(req, res) {
        const roles = await Role.findAll()
        return res.json(roles)
    }
}

module.exports = new RoleController()

// Повар Кассир Кассир-Универсал Повар-универсал Наставник Франчайзер