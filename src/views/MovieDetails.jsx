import React, { useState, useEffect } from 'react'

import { get } from '../utils/httpClient'
import { useParams } from 'react-router'

import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

  // const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
  return (
    <React.Fragment>
      <Navbar />
      <main className='content'>
        <h2>Movie details ...</h2>
      </main>
      <Footer />
    </React.Fragment>
  )
}
