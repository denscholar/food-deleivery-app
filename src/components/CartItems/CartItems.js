import React, { useState, useEffect } from 'react';
import { RemoveCircleOutlined, AddCircleOutlined} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, subtractQuantity } from '../../redux/reducer/Reducer';
import './CartItem.css';

const CartItems = ({itemId, name, imgSrc, price}) => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)

    const [qty, setQty] = useState(1)
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price))

    const increaseQuantity = (itemId) =>{
        const addCart = cart.map((item) => item.id === itemId ? setQty(qty + 1) : item);
        setItemPrice(parseInt(qty) * parseFloat(price))
        dispatch(addQuantity(addCart))
    }

    

    const decreaseQuantity = (itemId) =>{
        const reduceCart = cart.map((item) => item.id === itemId ? setQty(qty - 1) : item)
        setItemPrice(parseInt(qty) * parseFloat(price));
        dispatch(subtractQuantity(reduceCart))
    }

    // useEffect(() => {
    //     increaseQuantity();
    //     decreaseQuantity();
    // }, [])
    
  return (
    <div className="cartItem">
        <div className="imgBox">
            <img src={imgSrc} alt='item' />
        </div>
        <div className="itemSection">
            <h2 className="itemName">{name}</h2>
            <div className="itemQty">
                <span>{qty}</span>
                <div className="quantity">
                <RemoveCircleOutlined className='itemRemove' onClick={() => decreaseQuantity(itemId)}/>
                <AddCircleOutlined className='itemAdd' onClick={() => increaseQuantity(itemId)}/>
                </div>
            </div>

        </div>
        <div className="itemPrice">
            <span className='dollar'>$</span>
            <span className="itemPriceValue">{itemPrice}</span>
        </div>
    </div>
  )
}

export default CartItems