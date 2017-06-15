module.exports = class Modem {
  constructor (type) {
    this.volume = 0
    this.type = type
    this.configure = null
    this.phonenumber = null
  }

  setVolume (volume) {
    this.volume = volume
  }

  getVolume () {
    return this.volume
  }

  setPhoneNumber (phonenumber) {
    this.phonenumber = phonenumber
  }

  getPhoneNumber () {
    return this.phonenumber
  }

  dail (pho) {
    this.setPhoneNumber(pho)
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