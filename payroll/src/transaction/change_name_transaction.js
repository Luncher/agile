const ChangeEmployeeTransaction = require('./change_employee_transaction')

class ChangeNameTransaction extends ChangeEmployeeTransaction {
  constructor (name, empId) {
    super(empId)
    this.name = name
  }

  change (employee) {
    employee.setName(this.name)
  }
}

module.exports = ChangeNameTransaction