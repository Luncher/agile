const Screen = require('./interface')

class OutputStream extends Screen {
  displayTemperature (temperature) {
    console.log("displayTemperature")
  }

  displayPressure (pressure) {
    console.log("displatPressure")
  }
}

module.exports = OutputStream