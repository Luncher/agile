const Observable = require('./observable')

class TemperatureObservable extends Observable {
  read () {
    console.log('read temperature')
    const val = Date.now()
    this.notifyObservers(val)
  }
}

module.exports = TemperatureObservable