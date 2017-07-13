class Iterator {
  constructor (args) {
    this.args = args
    this.currentIndex = 0
  }

  hasNext () {
    return this.currentIndex <= this.args.length - 1
  }

  next () {
    this.currentIndex++
    return this
  }

  previous () {
    this.currentIndex--
    return this
  }

  current () {
    return this.args[this.currentIndex]
  }
}

class ArgsParser {
  constructor (schema, args) {
    this.schema = schema
    this.argsIterator = new Iterator(args.split(/[ ]+/))
    this.argsMapping = Object.create(null)    
    this.schemaMapping = Object.create(null) 
  }

  static parse (schema, args) {
    const instance = new ArgsParser(schema, args)
    instance.parseSchema()
    instance.parseArgs()
    console.dir(instance.argsMapping)
    return instance  
  }

  usage () {
    Object.keys(this.schemaMapping).forEach(k => {
      const it = this.schemaMapping[k]
      console.log(`-${k}, ${it.description}`)
    })
  }

  //l : bool
  //s : string
  //n : int
  //schema: 'l,n,s'
  parseSchema () {
    this.schema.split(',').forEach(char => {
      switch(char) {
        case 'l': {
          this.schemaMapping[char] = new ArgsBooleanParamter(this)
          break
        }
        case 's': {
          this.schemaMapping[char] = new ArgsStringParamter(this)
          break
        }
        case 'n': {
          this.schemaMapping[char] = new ArgsIntegerParamter(this)          
          break
        }
        default: {
          throw new Error(`Unknow schema char: ${char}`)
        }
      }
    })
  }

  //-l false, -s hello
  parseArgs () {
    for (; this.argsIterator.hasNext(); this.argsIterator.next()) {
      const prefix = this.argsIterator.current()
      if (prefix.charAt(0) == '-') {
        this.parseArgParamter(prefix.substring(1))
      } else {
        throw new Error(`Error Args Prefix:${prefix}`)
      }
    }
  }

  parseArgParamter (val) {
    if (val in this.schemaMapping) {
      this.argsMapping[val] = this.schemaMapping[val].getValue()
    } else {
      throw new Error(`Args Not Found In Schema:${val}`)      
    }
  }
}

class ArgsParamter {
  constructor (argsParser) {
    this.value = null
    this.argsParser = argsParser
    this.iterator = argsParser.argsIterator    
  }

  getValue () {

  }
}

class ArgsBooleanParamter extends ArgsParamter {
  constructor (argsParser) {
    super(argsParser)
    this.description = 'Boolean Paramter'
  }

  getValue () {
    const param = this.iterator.next().current()
    this.value = param === 'true' ? true : false 

    return this.value
  }
}

class ArgsStringParamter extends ArgsParamter {
  constructor (argsParser) {
    super(argsParser)
    this.description = 'String Paramter'    
  }

  getValue () {
    this.value = this.iterator.next().current()
    return this.value
  }
}

class ArgsIntegerParamter extends ArgsParamter {
  constructor (argsParser) {
    super(argsParser)
    this.description = 'Integer Paramter'    
  }

  getValue () {
    const param = this.iterator.next().current()
    this.value = parseInt(param, 10)

    return this.value
  }
}

module.exports = ArgsParser