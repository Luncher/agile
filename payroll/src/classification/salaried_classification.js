const Classification = require('./classification')

class SalariedClassification extends Classification {
  constructor (salary) {
    this.salary = salary
  }

  getSalary () {
    return this.salary
  }

  calculatePay (payCheck) {
    return this.salary
  }
}

module.exports = SalariedClassification