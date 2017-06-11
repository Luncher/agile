const Classification = require('./classification')

class HourlyClassification extends Classification {
  constructor (hourlyRate) {
    this.timecards = []    
    this.hourlyRate = hourlyRate
  }

  calculatePay (payCheck) {
    const total = 0
    this.timecards.forEach(tc => {
      if (this.isInPayPeriod(payCheck, tc.getDate())) {
        total += this.calculatePayByTimeCard(tc)
      }
    })

    return total
  }

  calculatePayByTimeCard (tc) {
    const hours = tc.getHours()
    const overtime = hours - 8
    overtime = overtime > 0 ? overtime : 0
    const strighTime = hours - overtime
    return strighTime * this.hourlyRate + overtime * this.hourlyRate * 1.5
  }

  addTimeCard (timecard) {
    this.timecards.push(timecard)
  }
}

module.exports = HourlyClassification