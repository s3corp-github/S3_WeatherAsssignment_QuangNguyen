import { CityCardProps } from '../../types'
import './city-card.css'

function CityCard({ city, onRemove }: CityCardProps) {
  const { id, name, temp, windSpeed, atTime } = city
  return (
    <div className="city-weather-card">
      <div className="city-info">
        <h2>
          {name}, {temp}°C
        </h2>
        <p>{atTime}</p>
        <p>Wind Speed: {windSpeed} м/с</p>
      </div>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        &times;
      </button>
    </div>
  )
}

export default CityCard
