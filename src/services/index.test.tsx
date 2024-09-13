import { fetchCityWeather } from '../services/index'
import { mapCityData } from '../utils'
import { WeatherResponse } from '../types'

jest.mock('../utils', () => ({
  mapCityData: jest.fn(),
}))

const mockWeatherResponse: WeatherResponse = {
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

const expectedCityData = {
  id: 4887398,
  name: 'Chicago',
  temp: 18.79,
  windSpeed: 2.29,
  windDeg: 150,
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockWeatherResponse),
  })
) as jest.Mock

test('fetchCityWeather throws an error if city is not found', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ cod: 404 }),
    })
  ) as jest.Mock

  await expect(fetchCityWeather('UnknownCity')).rejects.toThrow(
    'City not found'
  )
})
