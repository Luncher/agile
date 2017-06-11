class Observable {
  constructor () {
    this.observers = []
  }

  addObserver (observer) {
    this.observers.push(observer)
  }

  notifyObservers (val) {
    this.observers.forEach(it => {
      it.update(val)
    })
  }
}

module.exports = Observable