class Employee {
  constructor () {
    this.name
    this.address
    this.empId

    this.method
    this.schedule
    this.affiliation
    this.classification    
  }

  setAffiliation (affiliation) {
    this.affiliation = affiliation
  }

  setMethod (method) {
    this.method = method
  }

  setSchedule (schedule) {
    this.schedule = schedule
  }

  setClassification (classification) {
    this.classification = classification
  }

  isPayDay (payDate) {
    return this.schedule.isPayDay(payDate)
  }

  getPayPeriodStartDate (payDate) {
    return this.schedule.getPayPeriodStartDate(payDate)
  }

  payDay (payCheck) {
    const totalPay = this.classification.calculatePay(payCheck)
    const deductions = this.affiliation.calculateDeduction(payCheck)
    const netPay = totalPay - deductions
    payCheck.setTotalPay(totalPay)
    payCheck.setDeduction(deductions)
    payCheck.setNetPay(netPay)
    this.method.pay(pc)
  }
}

module.exports = Employee