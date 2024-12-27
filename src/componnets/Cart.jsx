import React, { useEffect, useState } from 'react';

const Cart = ({ data , deleteItem }) => {
    const basket = JSON.parse(localStorage.getItem("addCart")) || []; 
    const [main, setMain] = useState([]);

    useEffect(() => {
        if (Array.isArray(basket) && basket.length > 0) { 
            const filteredData = data.filter(item => basket.includes(item.id)); 
            setMain(filteredData);
        } else {
            setMain([]);
        }
    }, [data, basket]);



    return (
        <div>
          <h1>{basket.length}</h1>
            {main.length > 0 ? (
                <div>
                    {main.map((item) => (
                        <div key={item.id}>
                          <img src={item.image} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <button onClick={()=>deleteItem(item.id)} >Remove item</button>
                        </div>
                    ))}
                </div>
            ) : (
                <h1>Mahsulot mavjud emas</h1>
            )}
        </div>
    );
};

export default Cart;
