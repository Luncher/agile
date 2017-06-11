const Observable = require('./observable')

class PressureTrendObservable extends Observable {
  constructor (pressureObserver) {
    super()
    this.pressureObserver = pressureObserver
  }

  read () {
    console.log('read pressure trend')
    this.notifyObservers(this.pressureObserver.read())
  }
}

module.exports = PressureTrendObservable