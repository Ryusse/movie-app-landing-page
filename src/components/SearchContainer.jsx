import { useHistory } from 'react-router'
import { useQuery } from '../hooks/useQuery'
import ExitButton from './ExitButton'
import Search from './Search'

export default function SearchContainer(props) {
  const history = useHistory()
  const query = useQuery()
  const search = query.get('search')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      className={`search-container ${props.open ? 'open' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className='search-container__box'>
        <input
          className='search-container__input'
          type='text'
          value={search}
          placeholder='Search...'
          onChange={(e) => {
            const value = e.target.value
            history.push('?search=' + value)
          }}
        />
        <Search className={'search-container__search-button'} />
      </div>

      <ExitButton
        className={'search-container__exit-button'}
        close={props.close}
      />
    </form>
  )
}
