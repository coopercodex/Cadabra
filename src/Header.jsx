import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket'
import { useSelector } from 'react-redux'
import { selectItems } from './slices/basketSlice'

export const Header = () => {
  const items = useSelector(selectItems);

  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header-logo' src='https://miro.medium.com/max/1400/1*Sauw_oUzzsUCVqtbAb3Hkw.jpeg' alt='site logo' />
      </Link>
      <div className='header-search'>
        <input type="text" className="search-input" />
        <SearchIcon className='search-icon' />
      </div>
      <div className='header-nav'>
        <Link to='/login' className='header-link'>
        <div className='header-option'>
          <span className='header-optionLineOne'>Hello Derek</span>
          <span  className='header-optionLineTwo'>Sign In</span>
        </div>
        </Link>
        <Link to='/' className='header-link'>
        <div className='header-option'>
          <span className='header-optionLineOne'>Returns</span>
          <span className='header-optionLineTwo'>& Orders</span>
        </div>
        </Link>
        <Link to='/' className='header-link'>
        <div className='header-option'>
          <span className='header-optionLineOne'>Your</span>
          <span className='header-optionLineTwo'>Prime</span>
        </div>
        </Link>
        <Link to='/checkout' className='header-link'>
          <div className='header-openBasket'> 
            <ShoppingBasket /> 
            <span className='header-optionLineTwo header-basketCount'>{items.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}
