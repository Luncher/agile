const Employee = require('./employee')

class PayrollDatabase {
  constructor () {
    this.itsEmployee = {}
  }

  getEmployee (empId) {
    return this.itsEmployee[empId]
  }

  addEmployee (empId, employee) {
    this.itsEmployee[empId] = employee
  }

  clear () {

  }
}