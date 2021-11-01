import { Link } from 'react-router-dom'
import { getMovieImg } from '../utils/getMovieImg'

export default function Moviecard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300)
  return (
    <Link className='card' to={'/movies/' + movie.id}>
      <img src={imageUrl} alt='movie image' className='card__img' />
      <div className='card__cover'></div>
      <h4 className='card__title fs-card-title'>{movie.title}</h4>
      <p className='card__date fs-small ff-dosis'>{movie.release_date}</p>
      <svg
        className='card__heart'
        width='15'
        height='14'
        viewBox='0 0 15 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.5443 0.897457C11.9388 -0.470707 9.55114 -0.224613 8.07751 1.29589L7.50036 1.89062L6.92321 1.29589C5.45251 -0.224613 3.06188 -0.470707 1.45641 0.897457C-0.38343 2.46777 -0.480109 5.28613 1.16638 6.98828L6.83532 12.8418C7.20153 13.2197 7.79626 13.2197 8.16247 12.8418L13.8314 6.98828C15.4808 5.28613 15.3841 2.46777 13.5443 0.897457Z'
          fill='#DD003F'
        />
      </svg>

      <div className='card__star-container'>
        <svg
          className='card__star'
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.99998 0L10.4718 4.93769L16 5.72945L12 9.57289L12.944 15L7.99998 12.4377L3.05569 15L4.00001 9.57289L0 5.72945L5.52783 4.93769L7.99998 0Z'
            fill='#FAC917'
          />
        </svg>
        <p className='card__date fs-small ff-dosis'>{movie.vote_average}</p>
      </div>
    </Link>
  )
}
