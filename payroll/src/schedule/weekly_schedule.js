const Schedule = require('./schedule')

class WeeklySchedule extends Schedule {
  constructor () {
    
  }

  isPayDate (date) {
    return date.getDay() === 4
  }

  getPayPeriodStartDate (date) {
    
  }
}

module.exports = WeeklySchedule