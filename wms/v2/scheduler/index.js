class Scheduler {
  constructor (pressureSensor, temperatureSensor, pressureTrendSensor) {
    this.pressureSensor = pressureSensor
    this.temperatureSensor = temperatureSensor
    this.pressureTrendSensor = pressureTrendSensor
  }

  tic (timestamp) {
    console.log(timestamp)
    this.pressureSensor.read()
    this.temperatureSensor.read()
    this.pressureTrendSensor.read()
  }
}

module.exports = Scheduler