const HoldMethod = require('./hold_method')
const MonthlySchedule = require('./monthly_schedule')
const SalariedClassification = require('./salaried_classification')
const AddEmployeeTransaction = require('./add_employee_transaction')

class AddAalariedEmployee extends AddEmployeeTransaction {
  constructor (empId, name, address, salary) {
    super(empId, name, address)
    this.salary = salary
  }

  getClassification () {
    return new SalariedClassification(this.salary)
  }

  getSchedule () {
    return new MonthlySchedule()
  }

  getMethod () {
    return new HoldMethod()
  }
}