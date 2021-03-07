import react, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Product from './Product.js'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Checkout from './Checkout.js'
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise=loadStripe('pk_test_51IS2raEx5QghFYrcMfTO828BbuBbFzIAspJSoOiDNr2whviY8zXGEYzzUrX0Fq9YP9UebNWlDC5yLcn49u3WrYiA00m3o6hSeG')


function App() {
  const [{basket},dispatch]=useStateValue();
  useEffect(() => {
    //Wil only run once when the app component loads...

    auth.onAuthStateChanged(authUser=>{
      console.log('The user is >>>', authUser);

      if(authUser){
        //The user just Logged in/te user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        //The user is Logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      
    }
  }, [])
  return (
    <Router>
      <div className="App">
        {/* <Header/> {/*header disini dirender 
        untuk semua route karena datang sebelum
        switch */}

         <Switch> {/*seperti switch pada bahasa code biasa */}
            <Route path="/orders">   
            <Header/>            
              
              <Orders/>

            </Route>
            <Route path="/Login">              
              
              <Login/>

            </Route>
            <Route path="/payment">              
              
              <Header/> 
              <h1>Ini Payment</h1>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
              

            </Route>    
            <Route path="/Checkout">  
              <Header/>             
              
              <Checkout/>

            </Route>  

            <Route path="/">              
              <Header/> 
              <Home/>

            </Route>    
        </Switch>
      </div>
    </Router>
  );
}

export default App;