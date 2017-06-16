module.exports = class PartVisitor {
  constructor () {

  }

  visitPiece (part) {

  }

  visitAssembly (part) {

  }

  visit (part) {
    switch (part.type) {
      case 'piece': {
        this.visitPiece(part)
        break
      }
      case 'assembly': {
        this.visitAssembly(part)
        break
      }
    }
  }
}