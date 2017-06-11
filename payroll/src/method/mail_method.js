const Method = require('./method')

class MailMethod extends Method {
  constructor (address) {
    this.address = address
  }

  getAddress () {
    return this.address
  }
}

module.exports = MailMethod