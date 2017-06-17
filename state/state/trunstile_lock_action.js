const TrunstileAction = require('./trunstile_action')

module.exports = class TrunstileLockAction extends TrunstileAction {
  constructor () {
    super()
  }

  coin (trunstile) {
    trunstile.setUnlockState()
    trunstile.unlock()
  }

  pass (trunstile) {
    trunstile.alarm()
  }
}