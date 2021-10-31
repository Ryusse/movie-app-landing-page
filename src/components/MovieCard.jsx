import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/images/image-not-found.jpg'

export default function Moviecard({ movie }) {
  const imageUrl = movie.poster_path
    ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
    : placeholder
  return (
    <Link className='card' to={'/movies/' + movie.id}>
      <img src={imageUrl} alt='movie image' className='card__img' />
      <p className='card__title'>{movie.title}</p>
      <p className='card__date'>{movie.release_date}</p>
    </Link>
  )
}
