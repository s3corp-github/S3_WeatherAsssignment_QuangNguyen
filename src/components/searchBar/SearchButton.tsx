import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
import './search-button.css'

interface SearchButtonProps {
  isLoading: boolean
  cityName: string
  handleSearch: () => void
}

export default function SearchButton({
  isLoading,
  cityName,
  handleSearch,
}: SearchButtonProps) {
  const buttonLabel = isLoading ? (
    <>
      <div>Loading...</div>
      <LoadingSpinner />
    </>
  ) : (
    'Search'
  )
  return (
    <button
      className="search-btn"
      disabled={isLoading || !cityName}
      onClick={handleSearch}
    >
      {buttonLabel}
    </button>
  )
}
