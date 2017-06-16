const Part = require('./part')

module.exports = class AssemblyPart extends Part {
  constructor (...args) {
    super('assembly', ...args)
    this.parts = []
  }

  addPart (part) {
    this.parts.push(part)
  }

  getParts () {
    return this.parts
  }

  accept (visitor) {
    visitor.visit(this)
    this.parts.forEach(it => {
      it.accept(visitor)
    })
  }
}