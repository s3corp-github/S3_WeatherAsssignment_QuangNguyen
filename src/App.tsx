import { useMemo, useState } from 'react'
import CityCards from './components/card/CityCards'
import CitySearchBar from './components/searchBar/CitySearchBar'
import TemperatureSlider from './components/slider/TemperatureSlider'
import { DEFAULT_FILTER } from './constant'
import { fetchCityWeather } from './services'
import { City } from './types'
import './weather-app.css'

function App() {
  const [cities, setCities] = useState<City[]>([])
  const [filters, setFilters] = useState(DEFAULT_FILTER)

  const onSearch = async (cityName: string) => {
    try {
      const newCity = await fetchCityWeather(cityName)
      setCities(prevCities => [...prevCities, newCity])
      setFilters(DEFAULT_FILTER)
    } catch (error) {
      console.log(error)
    }
  }

  const onRemove = (cityId: number) => {
    setCities(prevCities => prevCities.filter(city => city.id !== cityId))
  }

  const onFilter = (minTemp: number) => {
    setFilters({ minTemp: minTemp })
  }

  const citiesShown: City[] = useMemo(() => {
    return cities.filter(city => city.temp >= filters.minTemp)
  }, [cities, filters])

  return (
    <div className="weather-app">
      <CitySearchBar onSearch={onSearch} />
      <TemperatureSlider minTemp={filters.minTemp} onFilter={onFilter} />
      <CityCards cities={citiesShown} onRemove={onRemove} />
    </div>
  )
}

export default App
