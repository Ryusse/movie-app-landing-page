import { Link } from 'react-router-dom'
import { getMovieImg } from '../utils/getMovieImg'

export default function Moviecard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300)
  return (
    <Link className='card' to={'/movies/' + movie.id}>
      <img src={imageUrl} alt='movie image' className='card__img' />
      <p className='card__title'>{movie.title}</p>
      <p className='card__date'>{movie.release_date}</p>
    </Link>
  )
}
