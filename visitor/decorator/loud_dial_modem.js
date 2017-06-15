const Modem = require('./modem')

module.exports = class LoudDialModem extends Modem {
  constructor (modem) {
    super()
    
    this.modem = modem
  }

  setVolume (volume) {
    this.volume = volume
  }

  dail (pho) {
    this.modem.setVolume(11)
    this.modem.dail(pho)
  }

  hangup () {

  }

  send () {

  }

  recv () {

  }

  accept (visitor) {
    visitor.visit(this)
  }
}