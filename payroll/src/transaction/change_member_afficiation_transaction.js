const UnionAffiliation = require('./union_affiliation')
const GpayrollDatabase = require('./payroll_database')
const ChangeAffiliationTransaction = require('./change_affiliation_transaction')

class ChangeMemberAffiliationTransaction extends ChangeAffiliationTransaction {
  constructor (du, memberId, empId) {
    super(empId)
    this.du = du
    this.memberId = memberId
  }

  recordMemberShip (employee) {
    GpayrollDatabase.addUnionMember(this.memberId, employee)
  }

  getAffiliation () {
    return new UnionAffiliation(this.memberId, this.du)
  }
}