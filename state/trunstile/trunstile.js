const status = require('./status')
const events = require('./events')

module.exports = class Trunstile {
  constructor (controller) {
    this.state = status.LOCKED
    this.controller = controller
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

  event (event) {
    switch (this.state) {
      case status.LOCKED: {
        switch (event) {
          case events.COIN: {
            this.state = status.UNLOCKED
            this.unlock()
            break
          }
          case events.PASS: {
            this.alarm()
            break
          }
        }
        break
      }
      case status.UNLOCKED: {
        switch (event) {
          case events.COIN: {
            this.thankyou()
            break
          }
          case events.PASS: {
            this.state = status.LOCKED
            this.lock()
            break
          }
        }
        break
      }
    }
  }
}