const Observable = require('./observable')

class PressureObservable extends Observable {
  read () {
    console.log('read pressure')
    const val = Date.now()
    this.notifyObservers(val)
  }
}

module.exports = PressureObservable