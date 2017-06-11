const ChangeEmployeeTransaction = require('./change_employee_transaction')

class ChangeClassification extends ChangeEmployeeTransaction {
  constructor (empId) {
    super(empId)
  }

  change (employee) {
    const ps = this.getSchedule()
    const pc = this.getClassification()
    employee.setSchedule(ps)
    employee.setClassification(pc)
  }
}