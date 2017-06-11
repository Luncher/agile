const ChangeEmployeeTransaction = require('./change_employee_transaction')

class ChangeAddressTransaction extends ChangeEmployeeTransaction {
  constructor (address, empId) {
    super(empId)
    this.address = address
  }

  change (employee) {
    employee.setAddress(this.address)
  }
}

module.exports = ChangeAddressTransaction