const Transaction = require('./transaction')
const GpayrollDatabase = require('./payroll_database')

class ChangeEmployeeTransaction extends Transaction {
  constructor(empId) {
    super()
    this.empId = empId
  }

  static execute () {
    const e = GpayrollDatabase.getEmployee(this.empId)
    if (e) {
      this.change(e)
    }
  }
}