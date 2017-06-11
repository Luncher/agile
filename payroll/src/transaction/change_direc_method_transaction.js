const DirectMethod = require('./direct_method')
const ChangeMethodTransaction = require('./change_method_transaction')

class ChangeDirectMethodTransaction extends ChangeMethodTransaction {
  constructor (bank, account, empId) {
    super(empId)
    this.bank = bank
    this.account = account
  }

  getMethod () {
    return new DirectMethod(this.bank, this.account)
  }
}