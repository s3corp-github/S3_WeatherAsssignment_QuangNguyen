export interface City {
  id: number
  name: string
  temp: number
  windSpeed: number
  windDeg: number
}

export interface CityCardsProps {
  cities: City[]
  onRemove: (id: number) => void
}

export interface CityCardProps {
  city: City
  onRemove: (id: number) => void
}

export interface SearchBarProps {
  isLoading: boolean
  onSearch: (cityName: string) => void
}

export interface TemperatureSliderProps {
  minTemp: number
  onFilter: (minTemp: number) => void
}

export interface WeatherResponse {
  id: number
  name: string
  main: {
    temp: number
  }
  wind: {
    speed: number
    deg: number
  }
  cod: number
}
