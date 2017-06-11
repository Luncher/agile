const ChangeEmployeeTransaction = require('./change_employee_transaction')

class ChangeAffiliationTransaction extends ChangeEmployeeTransaction {
  constructor (empId) {
    super(empId)
  }

  change (employee) {
    employee.setAffiliation(this.getAffiliation())
  }
}