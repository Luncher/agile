const TemperatureObservable = require('./temperature')

class Nimbus1TemperatureObservable extends TemperatureObservable {
  constructor (alarmClock) {
    super(alarmClock)
  }
  
  read () {
    console.log('nimbus1 read temperature')
    return Date.now()
  }
}

module.exports = Nimbus1TemperatureObservable