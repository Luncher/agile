const PressureObservable = require('./pressure')

class Nimbus1PressureObservable extends PressureObservable {
  constructor (alarmClock) {
    super(alarmClock)
  }

  read () {
    console.log('nimbus1 read pressure')
    return Date.now()
  }
}

module.exports = Nimbus1PressureObservable