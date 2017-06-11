const Transaction = require('./transaction')
const GpayrollDatabase = require('./payroll_database')

class DeleteEmployeeTransaction extends Transaction {
  constructor(empId) {
    this.empId = empId
  }

  static execute () {
    GpayrollDatabase.deleteEmployee(this.empId)
  }
}

module.exports = DeleteEmployeeTransaction