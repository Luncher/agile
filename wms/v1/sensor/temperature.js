const Sensor = require('./interface')

class TemplatureSensor extends Sensor {
  read () {
    console.log('read temperature')
  }
}

module.exports = TemplatureSensor