const NoAffiliation = require('./no_affiliation')
const UnionAffiliation = require('./union_affiliation')
const ChangeAffiliationTransaction = require('./change_affiliation_transaction')

class ChangeUnAffiliationTransaction extends ChangeAffiliationTransaction {
  constructor (empId) {
    super(empId)
  }

  recordMemberShip (employee) {
    const af = employee.getAffiliation()
    if (af instanceof UnionAffiliation) {
      const memberId = af.getMemberId()
      GpayrollDatabase.removeUnionMember(memberId)
    }
  }

  getAffiliation () {
    return new NoAffiliation()
  }
}