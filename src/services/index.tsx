import { WeatherResponse } from '../types'
import { mapCityData } from '../utils'

const { REACT_APP_BASE_URL: BASE_URL, REACT_APP_API_KEY: API_KEY } = process.env

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
