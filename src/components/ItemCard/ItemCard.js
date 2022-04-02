import React, { useState, useEffect } from 'react';
import { AddCircleOutlined, StarOutlined, FavoriteOutlined } from '@mui/icons-material';
import './ItemCard.css';
import { Items } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { fetCartsData } from '../../redux/reducer/Reducer'
// let cartData = [];



const ItemCard = (props) => {
  const { imgSrc, name, price, ratings, itemId } = props;
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentRating, setCurrentRating] = useState(Math.floor(ratings))

  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [isCart, setIsCart] = useState(null)


  useEffect(() => {
    if(isCart){
      
      // cartData.push(isCart)
      // console.log(cartData)
      dispatch(fetCartsData(isCart))
    }
  }, [isCart])

  // Rating cleck event 
  const handleClick = (value) => {
    setCurrentRating(value);
  }

  return (
    <div className="itemCard" id={itemId}>
      <div className={`isFavourite ${isFavourite ? 'active' : ''}`} onClick={() => setIsFavourite(!isFavourite)}>
        <FavoriteOutlined />
      </div>
      <div className="imageContainer">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemcontent">
        <h3 className='itemName'>{name}</h3>
        <div className="bottom">
          <div className="rating">
            {Array.apply(null, { length: 5 }).map((item, i) => (
              <StarOutlined key={i} className={`rating ${currentRating > i ? 'orange' : 'gray'}`} onClick={() => handleClick(i + 1)} />
            ))}
            <h3 className="price">
              <span>$ </span>{price}
            </h3>
          </div>
          <AddCircleOutlined className='addtoCart' onClick={() => setIsCart(Items.find(item => item.id === itemId))}/>
        </div>
      </div>
    </div>
  )
}

export default ItemCard