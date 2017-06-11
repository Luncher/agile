const HoldMethod = require('./hold_method')
const WeeklySchedule = require('./weekly_schedule')
const HourlyClassification = require('./hourly_classification')
const AddEmployeeTransaction = require('./add_employee_transaction')

class AddHourlyEmployee extends AddEmployeeTransaction {
  constructor (empId, name, address, hourlyRate) {
    super(empId, name, address)
    this.hourlyRate = hourlyRate
  }

  getClassification () {
    return new HourlyClassification(this.hourlyRate)
  }

  getSchedule () {
    return new WeeklySchedule()
  }

  getMethod () {
    return new HoldMethod()
  }
}

module.exports = AddHourlyEmployee