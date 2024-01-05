const { Block } = require("../models/models");

class BlockController {
    async all(req, res) {
        const blocks = await Block.findAll()
        return res.json(blocks)
    }
    async allByRole(req, res) {
        const course = req.query.id_parent
        const arr = await Block.findAll({where: {id_parent: course}})
        return res.json(arr)
    }
    async add(req, res) {
        const {title, description, id_parent} = req.body
        const arr = await Block.create({id_parent, title, description})
        return res.json(arr)
    }
    async change(req, res) {
        
    }
    async delete(req, res) {
        const {id} = req.query
        const deleteElement = await Block.destroy({where: {id: id}})
        return res.json(deleteElement)
    }
    async quantityByCourse(req, res) {
        const {id_parent} = req.query;
        const quantityBlocks = await Block.findAll({where: {id_parent: id_parent}})
        const result = quantityBlocks.length
        return res.json(result)
    }
}

module.exports = new BlockController()