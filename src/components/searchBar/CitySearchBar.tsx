import { useState, useMemo } from 'react'
import { SearchBarProps } from '../../types'
import { AVAILABLE_CITY_NAMES } from '../../constant'
import './search-bar.css'

const SearchBar = ({ isLoading, onSearch }: SearchBarProps) => {
  const [cityName, setCityName] = useState<string>('')

  const handleSearch = () => {
    if (cityName.trim()) {
      onSearch(cityName)
      setCityName('')
    }
  }

  const cityNamesShown = useMemo(() => {
    if (cityName) {
      return AVAILABLE_CITY_NAMES.filter(name =>
        name.toLowerCase().includes(cityName.toLowerCase())
      )
    }
    return AVAILABLE_CITY_NAMES
  }, [cityName])

  return (
    <div className="search-bar">
      <h2>Choose a city</h2>
      <div>
        <input
          type="text"
          id="city-input"
          value={cityName}
          onChange={e => setCityName(e.target.value)}
          placeholder="Enter or select a city"
          list="city-list"
        />
        <datalist id="city-list">
          {cityNamesShown.map((name, index) => (
            <option key={index} value={name} />
          ))}
        </datalist>
        <button disabled={isLoading || !cityName} onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar
