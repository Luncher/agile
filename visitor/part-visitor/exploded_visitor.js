const PartVisitor = require('./part_visitor')

module.exports = class ExplodedVisitor extends PartVisitor {
  constructor () {
    super()
    this.totalCost = 0
  }

  visitPiece (part) {
    this.totalCost += part.getCost()
  }

  visitAssembly (part) {

  }
}