import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

export const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header-logo' src='https://miro.medium.com/max/1400/1*Sauw_oUzzsUCVqtbAb3Hkw.jpeg' />
      </Link>
      <div className='header-search'>
        <input type="text" className="search-input" />
        <SearchIcon className='search-icon' />
      </div>
      <div className='header-nav'>
        <Link></Link>
      </div>
    </nav>
  )
}
