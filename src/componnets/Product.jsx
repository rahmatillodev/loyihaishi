import React from 'react'

const Product = ({data, addToBasket}) => {

  return (
    <div className='productCards'>
        {data.map(product => 
            <div className='productCard' key={product.id}>
                <img src={product.image} alt="" />
                <p>{product.title}</p>
                <h1>{product.price}</h1>
                <button onClick={()=>addToBasket(product.id)} >Add to Card</button>
            </div>
        )}
    </div>
  )
}

export default Product