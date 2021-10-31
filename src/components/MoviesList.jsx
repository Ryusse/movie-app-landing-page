import Moviecard from './MovieCard'
import { useState, useEffect } from 'react'
import { get } from '../utils/httpClient'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Movieslist({ search }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search
      ? '/search/movie?query=' + search + '&page=' + page
      : '/discover/movie?page=' + page
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results))
      setHasMore(data.page < data.total_pages)
      setIsLoading(false)
    })
  }, [search, page])

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className='moviesList'>
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
