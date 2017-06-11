class PayCheck {
  constructor(startDate, payDate) {
    this.total
    this.netPay
    this.deduction
    this.payDate = payDate
    this.startDate = startDate
  }

  getPayEndDate () {
    return this.payDate
  }

  getPayStartDate () {
    return this.startDate
  }

  setTotalPay (total) {
    this.total = total
  }

  setDeduction (deduction) {
    this.deduction = deduction
  }

  setNetPay (netPay) {
    this.netPay = netPay
  }
}

module.exports = PayCheck