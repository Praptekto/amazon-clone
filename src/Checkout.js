import { PermDeviceInformation } from '@material-ui/icons';
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal.js'

function Checkout() {
    const [{basket,user}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left" >
                 
                <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                alt=""/>
                

                <div >
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title"> Your Shopping Basket</h2>
                    {basket.map((item)=>{
                        return (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                        )
                    })}
                    {/* Checkout Product */}
                    {/* shopping basket */}
                    {/* shopping basket */}
                    {/* shopping basket */}

                    
                </div>
            </div>

            <div className="checkout__right">
                <h2>Subtotal ada disini</h2>
                <Subtotal/>

                
            </div>



            
            
        </div>
    )
}

export default Checkout
