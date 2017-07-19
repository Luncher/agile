const crypto = require('crypto')
const CryptoStrategy = require('./crypto_strategy')

module.exports = class MD5Strategy extends CryptoStrategy {
  constructor (options) {
    super()
    this.key = options.key    
    this.algorithm = options.algorithm
  }

  execute (params) {
    const instance = crypto.createHmac(this.algorithm, this.key)
    return instance.update(params).digest('hex')
  }
}