const ChangeEmployeeTransaction = require('./change_employee_transaction')

class ChangeMethodTransaction extends ChangeEmployeeTransaction {
  constructor (empId) {
    super(empId)
  }

  change(employee) {
    employee.setMethod(this.getMethod())
  }
}