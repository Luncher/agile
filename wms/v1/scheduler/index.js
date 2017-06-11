const PressureSensor = require('../sensor/pressure')
const TemperatureSensor = require('../sensor/temperature')

class Scheduler {
  constructor (screen) {
    this.screen = screen
    this.pressureSensor = new PressureSensor()
    this.temperatureSensor = new TemperatureSensor()
  }

  tic (timestamp) {
    console.log(timestamp)
    const pressure = this.pressureSensor.read()
    const temperature = this.temperatureSensor.read()
    this.screen.displayPressure(pressure)
    this.screen.displayTemperature(temperature)
  }
}

module.exports = Scheduler