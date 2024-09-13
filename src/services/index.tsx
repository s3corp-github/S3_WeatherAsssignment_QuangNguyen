import { WeatherResponse } from '../types'
import { mapCityData } from '../utils'

const API_KEY = 'eec8a3e0755262349bb40afcf5f89203'
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchCityWeather = async (cityName: string) => {
  const weatherResponse = await fetch(
    `${WEATHER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
  )

  const jsonWeatherResponse: WeatherResponse = await weatherResponse.json()

  if (jsonWeatherResponse.cod !== 200) {
    throw new Error('City not found')
  }
  const { lat, lon } = jsonWeatherResponse.coord
  const polutionResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )

  const jsonPolutionResponse = await polutionResponse.json()

  if (jsonPolutionResponse?.list?.[0]?.components?.pm10) {
    jsonWeatherResponse.pm10 = jsonPolutionResponse?.list?.[0]?.components?.pm10
  }
  return mapCityData(jsonWeatherResponse)
}
