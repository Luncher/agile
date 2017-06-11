const Scheduler = require('./index')

class Nimbus1 extends Scheduler {
  constructor (pressureSensor, temperatureSensor, pressureTrendSensor) {
    super(pressureSensor, temperatureSensor, pressureTrendSensor)
  }

  startup () {
    setInterval(() => {
      super.tic(Date.now())
    }, 1000)
  }
}

module.exports = Nimbus1