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
        if (!!req.body.test) {
            const {id, test} = req.body;
            const updateItem = await Item.findOne({where: {id_parent: id}});
            updateItem.test = test;
            await updateItem.save();
            return res.json(updateItem);
        }
    }
    async addFile(req, res) {
        const { id } = req.body;
        const { file } = req.files;
        const fileName = file.name
        file.mv(path.resolve(__dirname, "..", "static", fileName));
        const updateItem = await Item.findOne({where: {id_parent: id}})
        updateItem.files = `${fileName}`
        await updateItem.save()
        return res.json(updateItem.files)
    }
    async updateItemString(req, res) {
        const { id, item } = req.body
        const updateItem = await Item.findOne({where: {id_parent: id}})
        updateItem.item = item
        await updateItem.save()
        return res.json(updateItem)
    }
}

module.exports = new ItemController()