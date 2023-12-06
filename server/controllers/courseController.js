const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
const { Course } = require("../models/models");

class CourseController {
  async create(req, res, next) {
    try {
      const { title, description } = req.body;
      const { file } = req.files;
      const img = uuid.v4() + ".jpg";
      file.mv(path.resolve(__dirname, "..", "static", img));
      const course = await Course.create({ title, description, img });
      return res.json({ course });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async all(req, res) {
    const courses = await Course.findAll();
    return res.json(courses);
  }
  async update(req, res) {
    //Первичная проверка. Есть ли само тело запроса
    if (!req.body){
        return res.json('Вы ничего не указали')
    }
    //Диструктуризация данных, ожидаемых с клиента
    const {id, title, description} = req.body

    //Проверка заполнения полей и последующая отправка в базу данных
    if (!!id) {
        if (!!title && !!description && !!id){
            const updateElement = await Course.findOne({where: {id: id}})
            updateElement.title = title
            updateElement.description = description
            await updateElement.save()
            return res.json(updateElement)
        }
        if (!!title){
            const updateElement = await Course.findOne({where: {id: id}})
            updateElement.title = title
            await updateElement.save()
            return res.json(updateElement)
        }
        if (!!description){
            const updateElement = await Course.findOne({where: {id: id}})
            updateElement.description = description
            await updateElement.save()
            return res.json(updateElement)
        }
    } else{return res.json("Вы не указали поле ID")}
  }
  async delete(req, res) {
    const {id} = req.body
    const deleteElement = await Course.destroy({where: {id: id}})
    return res.json(deleteElement)
  }
}

module.exports = new CourseController();
