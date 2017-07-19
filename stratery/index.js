const MD5Strategy = require('./md5_strategy')
const SHAStrategy = require('./sha_strategy')

function signatureParams (strategy, params) {
  return strategy.execute(params)
}

const md5Strategy = new MD5Strategy()
const shaStrategy = new SHAStrategy({ algorithm: 'sha256', key: '2333das' })

const result = signatureParams(md5Strategy, "12345")

console.log(result)