const Modem = require('./modem')

module.exports = class HayesModem extends Modem {
  constructor () {
    super('hayes')
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