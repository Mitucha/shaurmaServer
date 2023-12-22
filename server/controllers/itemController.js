const { Item } = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class ItemController {
    async create(req, res) {
        const {id_parent, item} = req.body;
        const itemCreate = await Item.create({id_parent, item})
        return res.json(itemCreate)

    }
    async getOne(req, res) {
        const id = req.query.id
        console.log(req.query)
        const item = await Item.findOne({where: {id_parent: id}})
        return res.json(item)
    }
    async delete(req, res) {
        
    }
    async update(req, res) {
        
    }
}

module.exports = new ItemController()