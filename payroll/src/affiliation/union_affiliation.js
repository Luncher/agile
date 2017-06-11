const Affiliation = require('/affiliation')
const ServiceCharge = require('./service_charge')

class UnionAffiliation extends Affiliation {
  constructor (memberId, du) {
    super(memberId)
    this.du = du
    this.serviceCharges = []
  }

  addServiceCharge (date, charge) {
    this.serviceCharges.push(new ServiceCharge(date, charge))
  }

  calculateDeduction (payCheck) {
    let total = 0
    this.serviceCharges.forEach(sc => {
      total += this.calculatePayByServiceCharge(sc, payCheck)
    })
  }

  calculatePayByServiceCharge (serviceCharge, patCheck) {
    
  }
}

module.exports = UnionAffiliation