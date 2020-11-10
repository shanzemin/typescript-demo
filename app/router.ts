import { Application } from 'egg'

module.exports = (app: Application) => {
  require('./router/user')(app)
  require('./router/toutiao')(app)
}
