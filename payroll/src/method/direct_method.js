const Method = require('./method')

class DirectMethod extends Method {
  constructor (bank, account) {
    this.bank = bank
    this.account = account
  }

  pay (payCheck) {
    
  }

  getBank () {
    return this.bank
  }

  getAccount () {
    return this.account
  }
}

module.exports = DirectMethod