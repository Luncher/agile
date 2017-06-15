const Modem = require('./modem')

module.exports = class HayesModem extends Modem {
  constructor () {
    super('hayes')
  }

  send () {

  }

  recv () {

  }

  dail (pho) {
    super.dail(pho)
  }

  hangup () {

  }

  accept (visitor) {
    visitor.visit(this)
  }
}