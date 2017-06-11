const Screen = require('./interface')
const PressureObserver = require('../observer/pressure')
const TemperatureObserver = require('../observer/temperature')
const PressureTrendObserver = require('../observer/pressure_trend')

class OutputStream extends Screen {
  constructor (weatherStation) {
    super(weatherStation)
    this.pressureObserver = new PressureObserver(this)
    this.temperatureObserver = new TemperatureObserver(this)
    this.pressureTrendObserver = new PressureTrendObserver(this)

    weatherStation.addPressureObserver(this.pressureObserver)
    weatherStation.addTemperatureObserver(this.temperatureObserver)
    weatherStation.addPressureTrendObserver(this.pressureTrendObserver)
  }

  displayTemperature (temperature) {
    // console.log("displayTemperature")
  }

  displayPressure (pressure) {
    // console.log("displatPressure")
  }

  displayPressureTrend (pressure) {
    // console.log("displatPressure Trend")    
  }
}

module.exports = OutputStream