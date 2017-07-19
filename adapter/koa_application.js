const Koa = require('koa')
const AppInterface = require('./app_interface')

module.exports = class extends AppInterface {
  constructor () {
    this.app = new Koa()
  }

  listen (port) {
    this.app.listen(port)
  }

  use (handler) {
    this.app.use(handler)
  }
}