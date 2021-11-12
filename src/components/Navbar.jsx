import { BrowserRouter as Route, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <Link className='navbar__link' to='/'>
            Home
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='/movies'>
            Movies
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='/series'>
            Series
          </Link>
        </li>
      </ul>
    </nav>
  )
}
