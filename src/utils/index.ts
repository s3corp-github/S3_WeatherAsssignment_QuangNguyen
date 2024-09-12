import { City, WeatherResponse } from '../types'

export const getCurrentTime = () => {
  const date = new Date()
  const formattedTime = date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .split(' ')

  return `${formattedTime[1]} ${formattedTime[0]}`
}

export const mapCityData = (data: WeatherResponse): City => {
  return {
    id: data.id,
    name: data.name,
    temp: data.main.temp,
    windSpeed: data.wind.speed,
    atTime: getCurrentTime(),
  }
}
