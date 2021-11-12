import { useState } from 'react'
import { useGetWidth } from '../hooks/useGetWidth'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import Menu from './Menu'
import Toggle from './Toggle'
import Button from './Button'
import Search from './Search'
import SearchContainer from './SearchContainer'
import Navbar from './Navbar'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(innerWidth)
  const breakpointTablet = 960

  const handleToggle = () => {
    function toggleMenu(prevMenuOpen) {
      return !prevMenuOpen
    }

    setMenuOpen(toggleMenu)
  }

  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  const closeSearch = () => {
    setSearchOpen(false)
  }

  useGetWidth(setWindowWidth)

  return (
    <div className='header'>
      {windowWidth < breakpointTablet && (
        <div className='header__item' onClick={handleToggle}>
          {windowWidth < breakpointTablet ? (
            <Toggle open={menuOpen} ariaLabel={'Open menu'} />
          ) : (
            !menuOpen
          )}
          {windowWidth < breakpointTablet ? (
            <Menu open={menuOpen} />
          ) : (
            !menuOpen
          )}
        </div>
      )}

      {windowWidth > breakpointTablet && (
        <div className='header__item'>
          <Navbar />
        </div>
      )}

      <div className='header__item'>
        <Link className='header__link' to='/'>
          <div className='logo'>LOGO</div>
        </Link>
      </div>

      <div className='header__item'>
        <Search className={'search-icon'} open={handleToggleSearch} />

        {windowWidth > breakpointTablet && (
          <>
            <Button className='button--black' content='Sign in' tabIndex='3' />
            <Button className='button--red' content='Sign up' tabIndex='4' />
          </>
        )}
      </div>
      {searchOpen && <SearchContainer close={closeSearch} open={'open'} />}
    </div>
  )
}
