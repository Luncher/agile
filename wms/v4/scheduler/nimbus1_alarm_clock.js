class Nimbus1AlarmClock {
  constructor () {
    this.listeners = []
    this.startup()
  }

  startup () {
    setTimeout(() => {
      this.tick()
    }, 3)
  }

  registerListener (listener, interval) {
    console.log('registerListener')
    console.log(interval)
    this.listeners.push({
      listener, interval
    })
  }

  unregisterListener (listener) {
    const index = this.listeners.findIndex(it => it.listener === listener)
    if (index > -1) {
      this.listeners = this.listeners.splice(index, 1)
    }
  }

  tick () {
    this.listeners.forEach(it => {
      setInterval(() => {
        it.listener.wakeup()
      }, it.interval)
    })
  }
}

module.exports = Nimbus1AlarmClock