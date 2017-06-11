const Observer = require('./observer')

class PressureObserver extends Observer {
  constructor (screen) {
    super()
    this.screen = screen
  }

  update (pressure) {
    this.screen.displayPressureTrend(pressure)
  }
}

module.exports = PressureObserver