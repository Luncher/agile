const Transaction = require('./transaction')
const GpayrollDatabase = require('./payroll_database')

class PaydayTransaction extends Transaction {
  constructor(payDate) {
    this.payDate = payDate
    this.payChecks = {}
  }

  static execute () {
    const empIds = GpayrollDatabase.getEmployIds()
    empIds.forEach(id => {
      const employee = GpayrollDatabase.getEmployById(id)
      if (employee.isPayDate(this.payDate)) {
        const pc = new PayCheck(e.getPayPeriodStartDate(this.payDate), this.payDate)
        this.payChecks[id] = pc
        employee.payDate(pc)
      }
    })
  }
}