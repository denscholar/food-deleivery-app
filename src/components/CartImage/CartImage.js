import React from 'react';
import Shopper from '../../Assets/shopper.png';
import './CartImage.css';

const CartImage = () => {
  return (
    <div>
        <div className="cartImage">
            <img src={Shopper} alt="shopping cart" />
        </div>
    </div>
  )
}

export default CartImage