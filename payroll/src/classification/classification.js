class Classification {
  constructor () {

  }

  isInPayPeriod (tc, date) {
    const startDate = tc.getPayStartDate()
    const endDate = tc.getPayEndDate

    if (date >= startDate && date <= endDate) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Classification