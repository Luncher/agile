const TrunstileAction = require('./trunstile_action')

module.exports = class TrunstileUnLockAction extends TrunstileAction {
  constructor () {
    super()
  }

  coin (trunstile) {
    trunstile.thankyou()    
  }

  pass (trunstile) {
    trunstile.setLockState()    
    trunstile.lock()    
  }
}