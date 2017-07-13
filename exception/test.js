const exception = require('./index')
const errorCodes = require('./error_code')

const e1 = exception.createException(errorCodes.ERROR_INVALID_PARAMTER, 'username')
const message = e1.formatMessage()