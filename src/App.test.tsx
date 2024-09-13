import { render, screen, fireEvent } from '@testing-library/react'
import { fetchCityWeather } from './services'
import App from './App'

jest.mock('./services', () => ({
  fetchCityWeather: jest.fn(),
}))

const mockCityData = {
  id: 4887398,
  name: 'Chicago',
  temp: 18.79,
  windSpeed: 2.29,
  windDeg: 150,
}

test('fetchCityWeather successfully updates city data', async () => {
  ;(fetchCityWeather as jest.Mock).mockResolvedValue(mockCityData)
  render(<App />)
  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'New York' },
  })
  fireEvent.click(screen.getByRole('button', { name: /search/i }))

  expect(screen.getByText(/loading/i)).toBeInTheDocument()
  expect(fetchCityWeather).toHaveBeenCalledWith('New York')
})
