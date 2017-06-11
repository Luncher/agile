const StationToolkit = require('./station_toolkit')
const Nimbus1Pressure = require('../sensor/nimbus1_pressure')
const Nimbus1Temperature = require('../sensor/nimbus1_temperature')
const Nimbus1PressureTrend = require('../sensor/nimbus1_pressure_trend')
const AlarmClock = require('../scheduler/alarm_clock')
const Nimbus1AlarmClock = require('../scheduler/nimbus1_alarm_clock')

class Nimbus1StationToolkit extends StationToolkit {
  constructor () {
    super()
    this.alarmClock = null
    this.temperature = null
    this.pressure = null
    this.pressureTrend = null
  }

  getAlarmClock () {
    if (!this.alarmClock) {
      const alarmClockImp = new Nimbus1AlarmClock()
      this.alarmClock = new AlarmClock(alarmClockImp)
    }
    return this.alarmClock
  }

  makeTemperature () {
    if (!this.temperature) {
      this.temperature = new Nimbus1Temperature(this.alarmClock)
    }
    return this.temperature
  }

  makePressure () {
    if (!this.pressure) {
      this.pressure = new Nimbus1Pressure(this.alarmClock)
    }
    return this.pressure
  }

  makePressureTrend () {
    if (!this.pressureTrend) {
      this.pressureTrend = new Nimbus1PressureTrend(this.alarmClock, this.pressure)
    }
    return this.pressureTrend
  }
}

module.exports = Nimbus1StationToolkit