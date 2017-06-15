module.exports = class ModemVisitor {
  constructor () {

  }

  visit (modem) {
    switch (modem.type) {
      case 'zoom': {
        modem.configure = "zoom config for unix"
        break
      }
      case 'hayes': {
        modem.configure = "hayes config for unix"
        break
      }
      case 'ernie': {
        modem.configure = "ernie config for unix"
        break
      }
    }
  }
}