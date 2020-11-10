import { Application } from 'egg'

module.exports = (app: Application) => {
  const { controller, router } = app

  router.get('/api/toutiao/start', controller.users.index)
}
