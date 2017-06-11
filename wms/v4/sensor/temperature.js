const Observable = require('./observable')
const AlarmClock = require('../scheduler/alarm_clock')

//800 interval
const TEMPERATURE_READ_INTERVAL = 10000

class TemperatureObservable extends Observable {
  constructor (alarmClock) {
    super()
    this.lastValue = NaN
    alarmClock.registerListener(this, TEMPERATURE_READ_INTERVAL)
  }

  wakeup () {
    console.log('TemperatureObservable wake')
    this.check()
  }

  check () {
    const val = this.read()
    if (val !== this.lastValue) {
      this.lastValue = val
      this.notifyObservers(val)
    }
  }
}

module.exports = TemperatureObservable