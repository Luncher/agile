const PressureTrendObservable = require('./pressure_trend')

class Nimbus1PressureTrendObservable extends PressureTrendObservable {
  constructor (alarmClock, pressureObserver) {
    super(alarmClock)
    this.pressureObserver = pressureObserver
  }

  read () {
    console.log('nibus1 read pressure trend')
    return Date.now()//this.pressureObserver.read();
  }
}

module.exports = Nimbus1PressureTrendObservable