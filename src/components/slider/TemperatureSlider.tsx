import React from 'react'
import { TemperatureSliderProps } from '../../types'
import './temperature-slider.css'

const TemperatureSlider = ({ minTemp, onFilter }: TemperatureSliderProps) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = parseInt(e.target.value, 10)
    onFilter(temp)
  }

  return (
    <div className="slide-container">
      <label htmlFor="slide">Warmer than:</label>
      <input
        id="slide"
        type="range"
        min="-20"
        max="40"
        value={minTemp}
        onChange={handleSliderChange}
      />
      <span>{minTemp}°C</span>
    </div>
  )
}

export default TemperatureSlider
