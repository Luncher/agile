const Scheduler = require('./index')
const OutputStream = require('../screen/output_stream')

class Nimbus1 extends Scheduler {
  constructor () {
    super(new OutputStream())
  }

  startup () {
    setInterval(() => {
      super.tic(Date.now())
    }, 1000)
  }
}

module.exports = Nimbus1