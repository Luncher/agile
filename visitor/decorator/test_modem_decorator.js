const assert = require('assert')
const HayesModem = require('./hayes_modem')
const LoudDialModem = require('./loud_dial_modem')

const h = new HayesModem()
assert(h.getVolume() === 0)
assert(h.getPhoneNumber() === null)

const loud = new LoudDialModem(h)

loud.dail(10086)
assert(h.getVolume() === 11)
assert(h.getPhoneNumber() === 10086)