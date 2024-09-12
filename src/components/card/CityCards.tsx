import CityCard from './CityCard';
import { CityCardsProps } from '../../types';

function CityCards({ cities, onRemove }: CityCardsProps) {
  return (
    <div className="cards-container">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default CityCards;
