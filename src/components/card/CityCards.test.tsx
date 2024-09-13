import { fireEvent, render, screen } from '@testing-library/react'
import CityCard from './CityCard'
import { City } from '../../types'

const MOCKED_CITY: City = {
  id: 5368361,
  name: 'Los Angeles',
  temp: 19.15,
  windSpeed: 3.09,
  windDeg: 120,
}

const onRemoveMock = jest.fn()
test('renders app CityCard', () => {
  render(<CityCard city={MOCKED_CITY} onRemove={onRemoveMock} />)
  const cityCard = screen.getByText(/Wind Speed/i)
  const removeBtn = screen.getByTestId('remove-btn')
  fireEvent.click(removeBtn)
  expect(cityCard).toBeInTheDocument()
  expect(onRemoveMock).toBeCalledTimes(1)
})
