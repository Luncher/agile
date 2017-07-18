const debug = require('debug')('logger')
const LogLevel = require('./log_level')
const printCreator = require('./print')
const formatCreator = require('./format')

const DefaultPrints = ['std', 'file']
const DefaultFormats = ['std', 'error']

class Logger {
  constructor (options) {
    this.prints = []
    this.formats = {}
    this.options = options
    this.init()
  }

  init () {
    this.createPrinter()
    this.createFormater()
  }

  createPrinter () {
    const { prints } = this.options
    prints = prints || DefaultPrints

    this.prints = prints.map(it => {
      if (it.stream) {
        return printCreator('std', it)
      } else if (it.path) {
        return printCreator('file', it)        
      } else {
        debug('unknow print:', it)
      }
    })
  }

  createFormater () {
    const { formats } = this.options
    formats = formats || DefaultFormats

    this.formats = formats.reduce((acc, type) => {
      acc[type] = formatCreator(type)
      return acc
    }, {})
  }

  write (level, str, ...args) {
    const formater = this.getFormater(str)
    const message = formater.format(level, str, ...agrs)

    this.prints.forEach(printer => {
      if (level > printer.getLevel()) {
        printer.write(message)
      }
    })
  }

  getFormater (str) {
    if (str instanceof Error) {
      return this.formats['error']
    } else {
      return this.formats['std']
    }
  }

  info (...args) {
    args.unshift(LogLevel.INFO)
    return this.write(...args)
  }

  debug (...args) {
    args.unshift(LogLevel.DEBUG) 
    return this.write(...args)
  }

  trace (...args) {
    args.unshift(LogLevel.TRACE) 
    return this.write(...args)
  }

  error (...args) {
    args.unshift(LogLevel.ERROR)   
    return this.write(...args)
  }

  fatal (...args) {
    args.unshift(LogLevel.FATAL)    
    return this.write(...args)
  }
}