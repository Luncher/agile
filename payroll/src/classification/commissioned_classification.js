const Classification = require('./classification')

class CommissionedClassification extends Classification {
  constructor (salary, commissionRate) {
    this.salary = salary
    this.salesReceipts = []
    this.commissionRate = commissionRate
  }

  calculatePay (payCheck) {
    let total = this.salary
    const date = payCheck.getDate()
    this.salesReceipts.forEach(it => {
      if (this.isInPayPeriod(payCheck, it.getDate())) {
        total += it.getAmount()
      }
    })
  }

  addSalesReceipt (salesReceipt) {
    this.salesReceipts.push(salesReceipt)
  }

  getSalary () {
    return this.salary
  }

  getCommissionRate () {
    return this.commissionRate
  }
}

module.exports = CommissionedClassification