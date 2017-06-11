const AlarmClock = require('./scheduler/alarm_clock')
const OutputStream = require('./screen/output_stream')
const Nimbus1PressureSensor = require('./sensor/nimbus1_pressure')
const Nimbus1TemperatureSensor = require('./sensor/nimbus1_temperature')
const Nimbus1PressureTrendSensor = require('./sensor/nimbus1_pressure_trend')

const alarmClock = new AlarmClock()
const nimbus1PressSensor = new Nimbus1PressureSensor(alarmClock)
const nimbus1TempSensor = new Nimbus1TemperatureSensor(alarmClock)
const nimbus1PressTrendSensor = new Nimbus1PressureTrendSensor(alarmClock)

const screen = new OutputStream(nimbus1PressSensor, nimbus1TempSensor, nimbus1PressTrendSensor)

alarmClock.tick()