const Transaction = require('./transaction')
const UnionAffiliation = require('./union_affiliation')
const GpayrollDatabase = require('./payroll_database')

class ServiceChargeTransaction extends Transaction {
  constructor (date, charge, memberId) {
    this.date = date
    this.charge = charge
    this.memberId = memberId
  }

  static execute () {
    const e = GpayrollDatabase.getUnionMember(this.memberId)
    const af = e.getAffiliation()
    if (af instanceof UnionAffiliation) {
      af.addServiceCharge(this.date, this.charge)
    } else {
      throw new Error('only UnionAffiliation need add addServiceCharge')
    }
  }
}