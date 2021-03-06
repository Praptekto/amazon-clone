import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to ="/checkout">{basket?.length} items</Link>)</h1>

                {/* Payment section - Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                        
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Sendangrejo street</p>
                        <p>Bojonegoro, Indonesia</p>
                        
                    </div>

                </div>
                {/* Payment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>

                        <div className="payment__items">
                            <h3>Delivery Address</h3>
                            {basket?.map(item=>(
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}/>
                            ))}
                        </div>
                    </div>
                    

                </div>
                {/* Paymentsection - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>

                        <div className="payment__details">
                            
                            {/* Stripe will take place */}

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
