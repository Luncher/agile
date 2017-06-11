const Observable = require('./observable')
const AlarmClock = require('../scheduler/alarm_clock')

//500ms interval
const PRESSURE_READ_INTERVAL = 3000

class PressureObservable extends Observable {
  constructor (alarmClock) {
    super()
    this.lastValue = NaN
    alarmClock.registerListener(this, PRESSURE_READ_INTERVAL)
  }

  wakeup () {
    console.log('PressureObservable wake')
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

module.exports = PressureObservable