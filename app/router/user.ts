import { Application } from 'egg'

module.exports = (app: Application) => {
  const { controller, router } = app

  router.get('/api/users/', controller.users.index)
  router.get('/api/users/:id', controller.users.show)
  router.post('/api/users/', controller.users.create)
}
