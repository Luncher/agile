const Sensor = require('./interface')

class PressureSensor extends Sensor {
  read () {
    console.log('read pressure')
  }
}

module.exports = PressureSensor