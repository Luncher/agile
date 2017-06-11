const HoldMethod = require('./hold_method')
const MonthlySchedule = require('./monthly_schedule')
const SalariedClassification = require('./salaried_classification')
const ChangeClassificationTransaction = require('./change_classification_transaction')

class ChangeSalariedTransaction extends ChangeClassificationTransaction {
  constructor (salary, empId) {
    super(empId)
    this.salary = salary
  }

  getMethod () {
    return new HoldMethod()
  }

  getSchedule () {
    return new WeeklySchedule()
  }

  getClassification () {
    return new SalariedClassification(this.salary)
  }
}