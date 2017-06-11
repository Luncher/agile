const Employee = require('./employee')
const Transaction = require('./transaction')
const GpayrollDatabase = require('./payroll_database')

class AddEmployeeTransation extends Transaction {
  constructor (empId, name, address) {
    this.name = name
    this.empId = empId
    this.address = address
  }

  static execute () {
    const pm = this.getMethod()
    const ps = this.getSchedule()
    const pc = this.getClassification()
    const e = new Employee(this.empId, this.name, this.address)
    e.setMethod(pm)
    e.setSchedule(ps)
    e.setClassification(pc)
    GpayrollDatabase.addEmplayee(this.empId, e)
  }

  getMethod () {

  }

  getSchedule () {

  }

  getClassification () {

  }
}
