import React from 'react'
import banner from '../../Assets/food.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
        <div className="content">
            <h4>Hello Dennis</h4>
            <p>Get your discount for every 20% percent</p>
            <button type='button'>Learn More</button>
        </div>
        <div className="banner-container">
        <img src={banner} alt="banner" />
        </div>
    </div>
  )
}

export default Banner