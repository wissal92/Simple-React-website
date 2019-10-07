import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({id, productName, image,  quantity,  price, organic}) =>{
   console.log(id);
    return(
        <div className="Item">
            <h1 className='Item-Image'>{image}</h1>
            <div className="Item-NameBox">
              <h2 className='Item-ProductName'>{productName}</h2>
            </div>
            <h4 className='Item-Organic'>{organic ? 'Organic' : ''}</h4>
            {organic ? <hr className='divider'></hr> : null}
            <h6 className='Item-Quantity space'>{quantity}</h6>
            <hr className='divider'></hr>
            <h6 className='Item-Price space'>{price}</h6>
            <div className='Item-NameBox'>
               <Link to={`/product/${id}`}><h6 className='Item-Detail'>DETAIL 👉</h6></Link>
            </div>
        </div>
    )
}

export default Item
