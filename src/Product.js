import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css'
import { useStateValue } from './StateProvider'



function Product({id,title, image, price ,rating}) {
    const [{basket},dispatch]=useStateValue();//??KONEK KE USE_REDUCER DI STATE PROVIDER


    // console.log(`Ini adalah basetnya`,basket);
    // console.log(`Ini adalah dispatch`,dispatch);

    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },

        });
    }




    return (
       
        <Link to={{
            pathname: "/productdetails",
            search: "",
            hash: "",
            state: { product: {id:id,title:title, image:image, price:price ,rating:rating} }
          }}
            className="product">
             
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small> $  </small>

                    <strong> {price}  </strong>
                </p>

                <div className="product__rating">
                    {
                        Array(rating).fill().map((_,i)=>(
                            <p>⭐</p>
                        ))
                    }

                </div>
            </div>
            <img src={image}/>

            <button onClick={addToBasket}>Add to basket</button>
               
        </Link>
        
    )
}

export default Product