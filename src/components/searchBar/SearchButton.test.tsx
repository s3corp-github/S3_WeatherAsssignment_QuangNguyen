import { render, screen } from '@testing-library/react'
import SearchButton from './SearchButton'

const mockedHandleSearch = jest.fn()
test('renders app SearchButton', () => {
  render(
    <SearchButton
      cityName=""
      isLoading={false}
      handleSearch={mockedHandleSearch}
    />
  )
  const searchButton = screen.getByText('Search')
  expect(searchButton).toBeInTheDocument()
})
