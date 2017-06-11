const GpayrollDatabase = require('../src/payroll_database')
const AddSalariedEmplyee = require('../src/add_salaried_employee')
const MonthlySchedule = require('../src/month')

describe('payroll', function () {
  it ('addSalariedEmplyee', function () {
    const empId = 1
    const emp = new AddSalariedEmplyee(empId, "Luncher", "home", 1000.00)
    emp.execute()
    const e = GpayrollDatabase.getEmployee(empId)
    assert("Luncher" === e.getName())
    assert(e.getSalary() === 1000.00)
    
    const pc = e.getClassification()
    assert(pc instanceof SalariedClassification)

    const ps = e.getSchedule()
    assert(ps instanceof MonthlySchedule)

    const pm = e.getMethod()
    assert(pm instanceof HoldMethod)
  })
})