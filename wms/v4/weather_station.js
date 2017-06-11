const Nimbus1Toolkit = require('./station_toolkit/nimbus1_station_toolkit')

class WeatherStation {
  constructor () {
    this.toolkit = new Nimbus1Toolkit()
    this.alarmClock = this.toolkit.getAlarmClock()
    this.pressSensor = this.toolkit.makePressure()
    this.tempSensor = this.toolkit.makeTemperature()
    this.pressTrendSensor = this.toolkit.makePressureTrend()
  }

  addPressureObserver (observer) {
    this.pressSensor.addObserver(observer)
  }

  addPressureTrendObserver (observer) {
    this.pressTrendSensor.addObserver(observer)
  }

  addTemperatureObserver (observer) {
    this.tempSensor.addObserver(observer)
  }
}

module.exports = WeatherStation