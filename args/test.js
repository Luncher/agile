const ArgsParser = require('./index')

const schema = 'n,l,s'
const args = '-l false -n 1234 -s hello'

const instance = ArgsParser.parse(schema, args)
instance.usage()