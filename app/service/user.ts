import { Service } from 'egg';

/**
 * User Service
 */
export default class User extends Service {

  public async list() {
    const { ctx } = this
    const users = await ctx.model.User.find()
    return users
  }

  public async create (data: Object) {
    const { ctx } = this
    const users = await ctx.model.User.create(data)
    return users
  }
}
