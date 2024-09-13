import { WeatherResponse } from '../types'
import { mapCityData } from '../utils'

const API_KEY = 'eec8a3e0755262349bb40afcf5f89203'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchCityWeather = async (cityName: string) => {
  const response = await fetch(
    `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
  )

  const jsonResponse: WeatherResponse = await response.json()

  if (jsonResponse.cod !== 200) {
    throw new Error('City not found')
  }

  return mapCityData(jsonResponse)
}
