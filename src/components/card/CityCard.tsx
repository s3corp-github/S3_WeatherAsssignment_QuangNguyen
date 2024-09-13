import { CityCardProps } from '../../types'
import './city-card.css'

function CityCard({ city, onRemove }: CityCardProps) {
  const { id, name, temp, windSpeed, pm10 } = city

  return (
    <div className="city-weather-card">
      <div className="city-info">
        <h2>
          {name}, {temp}°C
        </h2>
        <p>PM 10: {pm10}</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div>
      <button
        data-testid="remove-btn"
        className="remove-btn"
        onClick={() => onRemove(id)}
      >
        &times;
      </button>
    </div>
  )
}

export default CityCard
