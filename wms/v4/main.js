const Screen = require('./screen/output_stream')
const WeatherStation = require('./weather_station')

const station = new WeatherStation()
const screen = new Screen(station)