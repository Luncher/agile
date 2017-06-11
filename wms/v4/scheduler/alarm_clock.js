class AlarmClock {
  constructor (alarmClockImp) {
    this.alarmClockImp = alarmClockImp
  }

  registerListener (listener, interval) {
    this.alarmClockImp.registerListener(listener, interval)
  }

  unregisterListener (listener) {
    this.alarmClockImp.unregisterListener(listener, interval)
  }
}

module.exports = AlarmClock