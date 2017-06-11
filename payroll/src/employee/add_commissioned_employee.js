const HoldMethod = require('./hold_method')
const BiweekSchedule = require('./biweek_schedule')
const CommissionedClassification = require('./commissioned_classification')
const AddEmployeeTransaction = require('./add_employee_transaction')

class AddCommissionedEmployee extends AddEmployeeTransaction {
  constructor (empId, name, address, salary, commissionRate) {
    super(empId, name, address)
    this.salary = salary
    this.commissionRate = commissionRate
  }

  getClassification () {
    return new CommissionedClassification(this.salary, this.commissionRate)
  }

  getSchedule () {
    return new BiweekSchedule()
  }

  getMethod () {
    return new HoldMethod()
  }
}

module.exports = AddCommissionedEmployee