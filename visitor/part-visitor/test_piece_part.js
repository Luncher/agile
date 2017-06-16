const assert = require('assert')
const PiecePart = require('./piece_part')
const AssemblyPart = require('./assembly_part')
const ExplodedVisitor = require('./exploded_visitor')

const a =  new AssemblyPart('assembly-001', 'a test assembly')
const p1 = new PiecePart(10, 'piece-01', 'p1 test piece')
const p2 = new PiecePart(3, 'piece-02', 'p2 test piece')

a.addPart(p1)
a.addPart(p2)

const v = new ExplodedVisitor()

a.accept(v)
assert(v.totalCost === 13)