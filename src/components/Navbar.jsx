import { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Menu from './Menu'
import Toggle from './Toggle'
import Button from './Button'
import Search from './Search'
import SearchContainer from './SearchContainer'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

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

  return (
    <nav className='navbar'>
      <div className='navbar__item' onClick={handleToggle}>
        <Toggle open={menuOpen} ariaLabel={'Open menu'} />
      </div>
      <Menu open={menuOpen} />

      <div className='navbar__item'>
        <Link className='navbar__link' to='/'>
          <div className='logo'>LOGO</div>
        </Link>
      </div>

      <div className='navbar__item'>
        <Search className={'search-icon'} open={handleToggleSearch} />

        <Button className='button--sign-up' content='Sign up' tabIndex='3' />
      </div>
      {searchOpen && <SearchContainer close={closeSearch} open={'open'} />}
    </nav>
  )
}
