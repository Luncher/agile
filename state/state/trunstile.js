const TrunsLockAction = require('./trunstile_lock_action')
const TrunsUnLockAction = require('./trunstile_unlock_action')

module.exports = class Trunstile {
  constructor (controller) {
    this.controller = controller
    this.trunslock = new TrunsLockAction()
    this.trunsunlock = new TrunsUnLockAction()
    this.state = this.trunslock    
  }

  coin () {
    this.state.coin(this)
  }

  pass () {
    this.state.pass(this)
  }

  lock () {
    this.controller.lock()
  }

  unlock () {
    this.controller.unlock()
  }

  alarm () {
    this.controller.alarm()
  }

  thankyou () {
    this.controller.thankyou()
  }

  setLockState () {
    this.state = this.trunslock
  }

  setUnlockState () {
    this.state = this.trunsunlock
  }
}