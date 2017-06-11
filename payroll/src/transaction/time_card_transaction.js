const TimeCard = require('./time_card')
const Transaction = require('./transaction')
const GpayrollDatabase = require('./payroll_database')
const HourlyClassification = require('./hourly_classification')

class TimeCardTransaction extends Transaction {
  constructor (date, hour, empId) {
    this.date = date
    this.hour = hour
    this.empId = empId
  }

  static execute () {
    const e = GpayrollDatabase.getEmployee(this.empId)
    const hc = e.getClassification()
    if (hc instanceof HourlyClassification) {
      const timecard = new TimeCardTransaction(this.date, this.hour)
      hc.addTimeCard(timecard)
    } else {
      throw new Error('only HourlyClassification need addTimeCard')
    }
  }
}