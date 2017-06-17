const Trunstile = require('./trunstile')
const TrunstileController = require('./trunstile_controller')


const tc = new TrunstileController()
const t = new Trunstile(tc)

t.coin()
t.coin()
t.coin()
t.pass()
t.pass()