import React, { useState, useEffect } from 'react';
import SubMenu from '../SubMenu/SubMenu';
import MenuCard from '../MenuCard/MenuCard';
import { MenuItems, Items } from '../data';
import CartImage from '../CartImage/CartImage';
import CartItems from '../CartItems/CartItems';
import ItemCard from '../ItemCard/ItemCard';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import './Main.css';

const Main = () => {
  // state for filtering
  const [filteredItems, setFilteredItems] = useState(Items);
  const cart = useSelector((state) => state.cart);
  
  // console.log(cart);

  // state for toggling the toggle icon
  const [isToggle, setIsToggle] = useState(false);

  //filter function
  const handleClick = (itemId) => {
    const itemList = Items.filter((item) => item.itemId === itemId);
    setFilteredItems(itemList)
  }

  return (
    <>
      <Header onToggle={() => setIsToggle(!isToggle)} />
      <div className='dishContainer'>
        <div className="menuCard">
          <SubMenu name={'Menu Category'} />
        </div>
        <div className="rowcontainer" >
          {MenuItems && MenuItems.map((item) => (
            <div key={item.id} onClick={() => handleClick(item.itemId)}>
              <MenuCard name={item.name} imgSrc={item.imgSrc} isActive={'isActive'} />
            </div>
          ))}
        </div>
        <div className="dishItemcontainer">
          {filteredItems && filteredItems.map((item) => {
            const { imgSrc, id, ratings, name, price } = item
            return (
              <ItemCard key={id}
                imgSrc={imgSrc}
                name={name}
                itemId={id}
                ratings={ratings}
                price={price}
              />
            )
          })}
        </div>
        <div className={`right-menu ${isToggle ? 'active' : ''}`}>
          <div className="cart-container">
            <div className="cart">
              <CartImage />
            </div>
          </div>
          {!cart ? (
            <div>hello world</div>
          ) : (
            <div className="checkoutcontainer">
              <div className="cartcontainer">
                <SubMenu name={'Cart Items'} />
                <div className="cart">
                  {cart && cart.map(({ id, name, imgSrc, price }) => {
                    return (
                    <CartItems
                      key={id}
                      name={name}
                      itemId={id}
                      imgSrc={imgSrc}
                      price={price}
                    />)
                  })}
                </div>
              </div>
              <div className='totalSection'>
                <h3>Total</h3>
                <p><span>$</span>45.5</p>
              </div>
              <button className='checkout'>Checkout</button>
            </div>)
          }
        </div>
      </div>
    </>

  )
}

export default Main