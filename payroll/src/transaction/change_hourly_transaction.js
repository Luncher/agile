const HoldMethod = require('./hold_method')
const WeeklySchedule = require('./weekly_schedule')
const HourlyClassification = require('./hourly_classification')
const ChangeClassificationTransaction = require('./change_classification_transaction')

class ChangeHourlyTransaction extends ChangeClassificationTransaction {
  constructor (hourlyRate, empId) {
    super(empId)
    this.hourlyRate = hourlyRate
  }

  getSchedule () {
    return new WeeklySchedule()
  }

  getClassification () {
    return new HourlyClassification(this.hourlyRate)
  }
}