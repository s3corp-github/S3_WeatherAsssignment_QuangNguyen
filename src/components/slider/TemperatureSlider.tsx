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
      <div>{minTemp}°C</div>
      <div className='slide'>
        <h4 className='label'>Warmer than:</h4>
        <input
          type="range"
          min="-20"
          max="40"
          value={minTemp}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  )
}

export default TemperatureSlider
