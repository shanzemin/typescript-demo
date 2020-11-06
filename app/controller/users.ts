import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx, service } = this;
    ctx.body = await service.user.list();
  }

  public async show () {
    const { ctx } = this
    const user = await ctx.model.User.findOne({ _id: ctx.params.id })
    ctx.body = user
  }

  public async create () {
    const { ctx, service } = this
    const body = ctx.request.body
    const user = await service.user.create(body)
    ctx.body = user
  }
}
