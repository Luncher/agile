const Modem = require('./modem')

module.exports = class ErnieModem extends Modem {
  constructor () {
    super('ernie')
  }

  send () {

  }

  recv () {

  }

  dail () {

  }

  hangup () {

  }

  accept (visitor) {
    visitor.visit(this)
  }
}