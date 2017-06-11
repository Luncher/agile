const Schedule = require('./schedule')

class MonthlySchedule extends Schedule {
  constructor () {

  }

  isPayDate (date) {
    const tmp = new Date()
    tmp.setTime(date.getTime())
    const day = tmp.setDate(tmp.getDate() + 1)
    return Number.isNaN(day) ? true : false
  }

  getPayPeriodStartDate (date) {
    
  }
}

module.exports = MonthlySchedule