import React from 'react';
import { ChevronRightRounded } from '@mui/icons-material';
import './MenuCard.css';
import bugger from '../../Assets/bugger.jpg'
const MenuCard = ({ name, imgSrc, isActive }) => {
  return (
    <div className={`rowMenuCard ${isActive ? 'active' : ''}`} >
      <div className="imgMenuCard">
        <img src={imgSrc} alt="food" />
      </div>
      <h3>{name}</h3>
      <ChevronRightRounded />
    </div>
  )
}

export default MenuCard