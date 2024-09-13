import { City, WeatherResponse } from '../types'

export const mapCityData = (data: WeatherResponse): City => {
  return {
    id: data.id,
    name: data.name,
    temp: data.main.temp,
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
  }
}
