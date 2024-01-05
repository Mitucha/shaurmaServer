const { User } = require("../models/models");
const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {
    const { name, email, password, id_role } = req.body;
    let tryValue;
    //Проверим наличие параметров
    if (!name || !email || !password || !id_role) {
      return res.json("Не все данные указаны");
    }
    tryValue = await User.findOne({ where: { email: email } });
    if (!!tryValue) {
      return res.json("Такая почта уже используется");
    } else {
      const addUser = await User.create({ name, email, password, id_role });
      return res.json(addUser);
    }
  }
  async login(req, res) {
    const { email, password } = req.body;
    //Проверка данных req
    if (!email || !password) {
      return res.json("Указаны не все данные");
    }
    //Проверка на наличие пользователя в базе данных
    const candidate = await User.findOne({
      where: { email: email, password: password },
    });
    if (!!candidate) {
      return res.json(candidate);
    } else {
      return res.json("Такого пользователя нет в базе данных");
    }
  }
  async all(req, res) {
    const allUser = await User.findAll();
    return res.json(allUser);
  }
  async update(req, res) {
    //Первичная проверка. Есть ли само тело запроса
    if (!req.body) {
      return res.json("Вы ничего не указали");
    }
    //Диструктуризация данных, ожидаемых с клиента
    const { id, name, email, password, id_role, access } = req.body;

    //Проверка заполнения полей и последующая отправка в базу данных
    if (!!id) {
      if (!!name && !!email && !!password && !!id_role && !!access) {
        const updateElement = await User.findOne({ where: { id: id } });
        updateElement.name = name;
        updateElement.email = email;
        updateElement.password = password;
        updateElement.id_role = id_role;
        updateElement.access = access;
        await updateElement.save();
        return res.json(updateElement);
      } else {
        return res.json("Вы указали не все данные");
      }
    } else {
      return res.json("Вы не указали поле ID");
    }
  }

  async updateLevel(req, res) {
    const {id, level} = req.body;
    const element = await User.findOne({where: {id: id}});
    element.level = level;
    await element.save()
    return res.json(element)
  }

  async allByRole(req, res) {
    const {role} = req.query
    console.log(req.query)
    //const allByRole = await User.findAll({where: {id_role: role}})
    //return res.json(allByRole)
  }

  async delete(req, res) {
    const { id } = req.query;
    const deleteElement = await User.destroy({ where: { id: id } });
    return res.json(deleteElement);
  }

  async usersByRole(req, res) {
    const { id_role } = req.query
    const users = await User.findAll({where: {id_role: id_role}})
    return res.json(users)
  }
}

module.exports = new UserController();
