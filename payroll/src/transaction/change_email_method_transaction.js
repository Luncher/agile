const MailMethod = require('./direct_method')
const ChangeMethodTransaction = require('./change_method_transaction')

class ChangeDirectMethodTransaction extends ChangeMethodTransaction {
  constructor (address, empId) {
    super(empId)
    this.address = address
  }

  getMethod () {
    return new MailMethod(this.address)
  }
}