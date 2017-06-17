const events = require('./events')
const Trunstile = require('./trunstile')
const TrunstileController = require('./trunstile_controller')

const tc = new TrunstileController()
const t = new Trunstile(tc)

t.event(events.PASS)
t.event(events.COIN)