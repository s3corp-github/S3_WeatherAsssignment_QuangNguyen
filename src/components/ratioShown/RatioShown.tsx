import { City } from '../../types'

interface RatioShownProps {
  cities: City[]
  citiesShown: City[]
}
function RatioShown({ cities, citiesShown }: RatioShownProps) {
  if (!cities.length || cities.length === citiesShown.length) return null

  return <div>{citiesShown.length + '/' + cities.length + ' cities'}</div>
}

export default RatioShown
