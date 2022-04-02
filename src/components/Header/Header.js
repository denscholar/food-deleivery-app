import './Header.css';
import { BarChartOutlined, SearchOutlined, ShoppingCartRounded } from '@mui/icons-material';
import logo from '../../Assets/delivery.png';
import React from 'react'

const Header = ({onToggle}) => {
  return (
    <header className='header'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="searchBar">
            <SearchOutlined className='search'/>
            <input type="text" className='searchInput' />
        </div>
        <div className="shoppingCart">
            <div className="shoppingCart">
            <ShoppingCartRounded className='cart' />
            </div>
            <p className='content'>2</p>
        </div>
        <div className="profileContainer">
            <div className='imageBox'>
                <img src="" alt="" />
            </div>
            <h2 className='username'>Username</h2>
        </div>
        <div className="toggle">
            <BarChartOutlined className='barChat' onClick={onToggle}/>
        </div>
    </header>
  )
}

export default Header