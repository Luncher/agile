const Part = require('./part')

module.exports = class PiecePart extends Part {
  constructor (cost, ...args) {
    super('piece', ...args)
    this.cost = cost
  }

  getCost () {
    return this.cost
  }

  accept (visitor) {
    visitor.visit(this)
  }
}