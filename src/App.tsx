import { useMemo, useState } from 'react'
import CityCards from './components/card/CityCards'
import CitySearchBar from './components/searchBar/CitySearchBar'
import TemperatureSlider from './components/slider/TemperatureSlider'
import RatioShown from './components/ratioShown/RatioShown'
import { DEFAULT_FILTER } from './constant'
import { fetchCityWeather } from './services'
import { City } from './types'
import './weather-app.css'

function App() {
  const [cities, setCities] = useState<City[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState(DEFAULT_FILTER)

  const onSearch = async (cityName: string) => {
    try {
      setIsLoading(true)
      const newCity = await fetchCityWeather(cityName)
      const existNewCity = cities.some(city => city.name === newCity.name);
      if (existNewCity) {
        const updatedCities = cities.map(city => {
          if (city.name === newCity.name) {
            return newCity
          }
          return city
        })
        alert(`Updated weather of ${newCity.name}`);
        setCities(updatedCities)
      } else {
        setCities(prevCities => [...prevCities, newCity])
      }
      setFilters(DEFAULT_FILTER)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }

  }

  const onRemove = (cityId: number) => {
    setCities(prevCities => prevCities.filter(city => city.id !== cityId))
  }

  const onFilter = (minTemp: number) => {
    setFilters({ minTemp })
  }

  const citiesShown: City[] = useMemo(() => {
    return cities.filter(city => city.temp >= filters.minTemp)
  }, [cities, filters])

  return (
    <div className="weather-app">
      <CitySearchBar isLoading={isLoading} onSearch={onSearch} />
      <TemperatureSlider minTemp={filters.minTemp} onFilter={onFilter} />
      <RatioShown cities={cities} citiesShown={citiesShown} />
      <CityCards cities={citiesShown} onRemove={onRemove} />
    </div>
  )
}

export default App
