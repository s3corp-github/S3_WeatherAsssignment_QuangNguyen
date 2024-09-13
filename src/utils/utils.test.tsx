import { mapCityData } from './index'
import { City, WeatherResponse } from '../types'

const MOCKED_DATA: WeatherResponse = {
  id: 4887398,
  name: 'Chicago',
  main: {
    temp: 18.79,
  },
  wind: {
    speed: 2.29,
    deg: 150,
  },
  cod: 200,
}
const EXPECTED_RESULT: City = {
  id: 4887398,
  name: 'Chicago',
  temp: 18.79,
  windSpeed: 2.29,
  windDeg: 150,
}
test('mapCityData return correct', () => {
  const result = mapCityData(MOCKED_DATA)
  expect(result).toMatchObject(EXPECTED_RESULT)
})
