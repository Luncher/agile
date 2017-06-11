class AlarmClock {
  constructor () {
    this.listeners = []
  }

  registerListener (listener, interval) {
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

module.exports = AlarmClock