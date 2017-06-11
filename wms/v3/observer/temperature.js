const Observer = require('./observer')

class TemperatureObserver extends Observer {
  constructor (screen) {
    super()
    this.screen = screen
  }

  update (temperature) {
    this.screen.displayTemperature(temperature)
  }
}

module.exports = TemperatureObserver