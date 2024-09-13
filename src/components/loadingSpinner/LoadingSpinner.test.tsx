import { render, screen } from '@testing-library/react'
import LoadingSpinner from './LoadingSpinner'

test('renders app header', () => {
  render(<LoadingSpinner />)
  const loadingSpinner = screen.getByTestId('loading-spinner')
  expect(loadingSpinner).toBeInTheDocument()
})
