const Modem = require('./modem')

module.exports = class ZoomModem extends Modem {
  constructor () {
    super('zoom')
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