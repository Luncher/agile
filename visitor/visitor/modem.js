module.exports = class Modem {
  constructor (type) {
    this.type = type
    this.configure = null
  }

  dail () {

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