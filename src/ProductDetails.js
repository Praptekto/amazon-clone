import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './Productdetail.css';
import { useStateValue } from './StateProvider';


function ProductDetails() {
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



    let location = useLocation();
    const id=location.state.product.id;
    const title=location.state.product.title;
    const image=location.state.product.image;
    const price=location.state.product.price;
    const rating=location.state.product.rating;
    return (
        <div className="maincontainer">
            <h3> {title}</h3>
            <div className="product__rating__pd">
                {
                    Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))
                }

            </div>
            <div className="container2">
                {/* <div className="">
                </div> */}
                
                <div  className="product__pd">
                                        
                    <img src={image}/>
                    <button onClick={addToBasket}>Add to basket</button>


                    {/* <button onClick={addToBasket}>Add to basket</button> */}
                
                </div>
                <div className="product__details">
                        <div className="product__info__pd">
                            <h5>{title}</h5>
                            <p className="product__price__pd">
                                <small> $  </small>

                                <strong> {price}  </strong>
                            </p>

                            
                            
                            <p><h5 style={{display:"inline"}}>Deskripsi : </h5>makan bareng</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
