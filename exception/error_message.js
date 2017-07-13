const errorCodes = require('./error_code')

module.exports = {
  [errorCodes.ERROR_PARAMTER_REQUIRED]: 'Paramater %s Required But Not Found.',
  [errorCodes.ERROR_INVALID_PARAMTER]: "Invalid Paramter: %s",
}