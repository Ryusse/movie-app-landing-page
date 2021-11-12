import { BrowserRouter as Route, Link } from 'react-router-dom'
import Button from './Button'

export default function Menu(props) {
  return (
    <div className={`menu ${props.open ? 'open' : ''}`}>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link className='menu__link' to='/'>
            Home
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/movies'>
            Movies
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' to='/series'>
            Series
          </Link>
        </li>
        <li className='menu__item'>
          <Button className='button--black' content='Sign in' tabIndex='3' />
          <Button className='button--red' content='Sign up' tabIndex='3' />
        </li>
      </ul>
    </div>
  )
}
