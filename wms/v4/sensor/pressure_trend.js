const Observable = require('./observable')

//1000ms interval
const PRESSURE_TREND_READ_INTERVAL = 20000


class PressureTrendObservable extends Observable {
  constructor (alarmClock) {
    super()
    this.lastValue = NaN
    alarmClock.registerListener(this, PRESSURE_TREND_READ_INTERVAL)
  }

  wakeup () {
    console.log('PressureTrendObservable wake')
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

module.exports = PressureTrendObservable