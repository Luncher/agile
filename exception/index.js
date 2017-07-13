const util = require('util')
const i18n = require("i18n-2")
const httpStatuses = require('statuses')
const errorCodes = require('./error_code')
const errorMessages = require('./error_message')

class Exception {
  constructor (code, args, message = '') {
    this.code = code
    this.args = args
    this.message = message || errorMessages[code]    
  }

  static create (code, args, message) {
    return new Exception(code, args, message)
  }

  setCode (code) {
    this.code = code
  }

  getCode () {
    return this.code
  }

  setMessage (message) {
    this.message = message
  }

  getMessage () {
    return this.message
  }

  formatMessage () {
    console.log(this.args)
    console.log(this.message)
    const ret1 = util.format(this.message, ...this.args)
    console.log(ret1)
    return ret1
  }
}

class HttpException extends Exception {
  constructor (status, code, message, args) {
    super(code, args, message)
    this.status = status
  }

  getStatus () {
    return this.status
  }

  setStatus (status) {
    this.status = status
    this.message = httpStatuses[status]
    return this
  }

  static create (status, code, args) {
    let message

    status = status || 500
    if (code === undefined) {
      code = errorCodes.ERROR_UNKNOWN
      message = httpStatuses[status]
    }
    return new HttpException(status, code, message, args)
  }
}

class I18NExceptionDecorator {
  constructor (exception) {
    this.exception = exception
    this.i18n = new i18n({
      locales: ['en', 'zh-CN', 'zh-TW'],
      directory: __dirname + '/locales'
    })
    this.i18n.setLocale('zh-TW')
  }

  set code (code) {
    this.exception.setCode(code)
  }

  get code () {
    return this.exception.getCode()
  }

  set message (message) {
    this.exception.setMessage(message)
  }

  get message () {
    return this.exception.getMessage()
  }

  formatMessage () {
    const message = this.message
    const i18nMessage = this.i18n.__(message) || message
    this.message = i18nMessage
    return this.exception.formatMessage()
  }
}

class ExceptionCreator {
  constructor () {

  }

  static createException (code, ...args) {
    const exception = Exception.create(code, args)
    const i18nDecotator = new I18NExceptionDecorator(exception)
    return i18nDecotator
  }

  static createHttpException (status, code, ...args) {
    const exception = HttpException.create(status, code, args)
    const i18nDecotator = new I18NExceptionDecorator(exception)
    return i18nDecotator
  }
}

module.exports = ExceptionCreator