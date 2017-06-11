const HoldMethod = require('./hold_method')
const BiweekSchedule = require('./biweekly_schedule')
const CommissionedClassification = require('./commissioned_classification')
const ChangeClassificationTransaction = require('./change_classification_transaction')

class ChangeCommissionedTransaction extends ChangeClassificationTransaction {
  constructor (salary,commissionRate, empId) {
    super(empId)
    this.salary = salary
    this.commissionRate = commissionRate
  }

  getSchedule () {
    return new BiweekSchedule()
  }

  getClassification () {
    return new CommissionedClassification(this.salary, this.commissionRate)
  }
}