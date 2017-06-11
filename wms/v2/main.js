const Nimbus1 = require('./scheduler/nimbus1')
const PressureSensor = require('./sensor/pressure')
const PressureTrendSensor = require('./sensor/pressure_trend')
const OutputStream = require('./screen/output_stream')
const TemperatureSensor = require('./sensor/temperature')

const pressureSensor = new PressureSensor()
const temperatureSensor = new TemperatureSensor()
const pressureTrendSensor = new PressureTrendSensor(pressureSensor)

const screen = new OutputStream(pressureSensor, temperatureSensor, pressureTrendSensor)
const instance = new Nimbus1(pressureSensor, temperatureSensor, pressureTrendSensor)

instance.startup()