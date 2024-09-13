import { render, screen } from '@testing-library/react'
import { City } from '../../types'
import RatioShown from './RatioShown'

const MOCKED_CITIES: City[] = [
  {
    id: 5368361,
    name: 'Los Angeles',
    temp: 19.15,
    windSpeed: 3.09,
    windDeg: 120,
  },
  {
    id: 5368361,
    name: 'Los Angeles',
    temp: 19.15,
    windSpeed: 3.09,
    windDeg: 120,
  },
]

const MOCKED_CITIES_SHOWN: City[] = [
  {
    id: 5368361,
    name: 'Los Angeles',
    temp: 19.15,
    windSpeed: 3.09,
    windDeg: 120,
  },
]

test('renders RatioShown', () => {
  render(
    <RatioShown cities={MOCKED_CITIES} citiesShown={MOCKED_CITIES_SHOWN} />
  )
  const loadingSpinner = screen.getByText('1/2 cities')
  expect(loadingSpinner).toBeInTheDocument()
})
