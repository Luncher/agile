module.exports = class Part {
  constructor (type, partNumber, description) {
    this.type = type
    this.partNumber = partNumber
    this.description = description
  }

  getPartNumber () {
    return this.partNumber
  }

  getDescription () {
    return this.description
  }

  accept (visitor) {
    visitor.visit(this)
  }
}