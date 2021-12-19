import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../../Models/User";

export default class UsersController {
  async create({ request, response }: HttpContextContract) {
    const data = request.only(["name", "username"]);
    const user = await User.create(data);
    return response.status(201).json(user);
  }

  async index() {
    const users = await User.all()
    return users;
  }
}
