import React from 'react';
import Item from '../Item/Item';
import Header from '../Header/Header';

const  FarmItems  = ({items}) =>{
        const elements = items.map(item => (
            <Item 
              productName={item.productName}  
              image={item.image}  
              quantity={item.quantity}  
              price={item.price} 
              organic={item.organic}
              id={item.id}
            />
        ))
        return (
            <div>
                <Header />
                {elements}
            </div>
    )
}

export default FarmItems;