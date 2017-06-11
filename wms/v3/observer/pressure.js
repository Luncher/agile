const Observer = require('./observer')

class PressureObserver extends Observer {
  constructor (screen) {
    super()
    this.screen = screen
  }

  update (pressure) {
    this.screen.displayPressure(pressure)
  }
}

module.exports = PressureObserver