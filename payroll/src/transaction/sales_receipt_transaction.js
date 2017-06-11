const SalesReceipt = require('./sales_receipt')
const Transaction = require('./transaction')
const GpayrollDateBase = require('./payroll_database')
const CommissionedClassification = require('./commissioned_classification')

class SalesReceiptTransaction extends Transaction {
  constructor(date, amount, empId) {
    this.date = date
    this.amount = amount
    this.empId = empId
  }

  static execute () {
    const e = GpayrollDateBase.getEmployee(this.empId)
    const pc = e.getClassification()
    if (pc instanceof CommissionedClassification) {
      const receipt = new SalesReceipt(this.date, this.amount)
      pc.addSalesReceipt(receipt)
    } else {
      throw new Error('only CommissionedClassification need addSalesReceipt')
    }
  }
}

module.exports = SalesReceiptTransaction