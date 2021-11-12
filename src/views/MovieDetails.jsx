import { useState, useEffect } from 'react'
import { get } from '../utils/httpClient'
import { useParams } from 'react-router'

import Spinner from '../components/Spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import { getMovieImg } from '../utils/getMovieImg'

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    get('/movie/' + movieId).then((data) => {
      setIsLoading(false)
      setMovie(data)
    })
  }, [movieId])

  if (isLoading) {
    return <Spinner />
  }
  if (!movie) {
    return null
  }

  // const imageUrl = getMovieImg(movie.poster.path, 500)
  return (
    <>
      <Header />
      <main className='content'>
        <h2>Movie details ...</h2>
      </main>
      <Footer />
    </>
  )
}
