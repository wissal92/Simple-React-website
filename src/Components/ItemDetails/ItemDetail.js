import React from 'react';
import './ItemDetail.css';

const ItemDetail = props =>{
    const {productName, url, from, nutrients,quantity, description, price} = props.item;
    return (
        <div className='Card'>
            <img className='Detail-Image' src={url} alt='product-image' />
            <h1 className='Detail-Title'>{productName}</h1>
            <div className='group'>
              <div className='Separator'>
                <p className='Detail-From el'>🌍 From {from}</p>
                <p className='Detail-Nutrients el'>❤ Nutrients {nutrients}</p>
              </div>
              <div className='Separator'>
                <p className='Detail-Quantity el'>📦 {quantity}</p>
                <p className='Detail-Price el'>💵 {price}$</p>
             </div>
            </div>
              <p className='Detail-Description'>{description}</p>
            <button className='Back' onClick={props.history.goBack}>Go Back!</button>
        </div>
    )
}

export default ItemDetail;