const crypto = require('crypto')
const CryptoStrategy = require('./crypto_strategy')

module.exports = class MD5Strategy extends CryptoStrategy {
  constructor () {
    super()
  }

  execute (params) {
    const instance = crypto.createHash('md5')
    return instance.update(params).digest('hex')
  }
}