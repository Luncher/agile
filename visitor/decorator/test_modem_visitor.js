const HayesModem = require('./hayes_modem')
const ZoomModem = require('./zoom_modem')
const ErnieModem = require('./ernie_modem')
const UnixModemVisitor = require('./unix_modem_visitor')

const visitor = new UnixModemVisitor()

const h = new HayesModem()
const z = new ZoomModem()
const e = new ErnieModem()

h.accept(visitor)
z.accept(visitor)
e.accept(visitor)

console.log(h.configure)
console.log(z.configure)
console.log(e.configure)