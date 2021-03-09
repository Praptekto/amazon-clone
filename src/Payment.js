import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios';
import {db} from './firebase'

function Payment() {
    const [{basket,user},dispatch]=useStateValue();

    const history=useHistory();
    const stripe=useStripe();
    const Elements=useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generate the special stripe secret which allow us charge the customer

        const getClientSecret= async ()=>{
            const response= await axios({
                method: 'post',
                //Stripe expects the total in a currencies Subunits
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
        // return () => {
            
        // }
    }, [basket])
    console.log('The secret is >>>', clientSecret);
    const handleSubmit=async (event)=>{
        //do all the fancy stripeae stuff
        event.preventDefault();
        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret,{//how stripe knows how much we are gonna charge
            payment_method:{
                card:Elements.getElement(CardElement),
            }
        }).then(({paymentIntent})=>{
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount: paymentIntent.amount,
                    created:paymentIntent.created
                    //semua key disini adalah key dan value baru yang kita push ke firestore
                })
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
        //paymentIntent ==payment confirmation
    }

    const handleChange=(event)=>{
        //Listen  for changes in the CardElement
        // and display any errors as the customer type their card details
        setDisabled(event.empty);
        setError(event.error? event.error.message: "");

    }

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
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat 
                                        renderText={(value)=>(
                                        <>
                                            <h3>Order Total {value}</h3>
                                        </>                        
                                        )}

                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                            <span>
                                            {processing ? <p>processing </p>:"buy now"}
                                            </span>
                                    </button>
                                    {/* misal error  */}
                                <div>
                                            
                                </div >
                                        {error&&<div>{error}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
