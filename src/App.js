import react from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Product from './Product.js'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Checkout from './Checkout.js'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/> {/*header disini dirender 
        untuk semua route karena datang sebelum
        switch */}

         <Switch> {/*seperti switch pada bahasa code biasa */}
          <Route path="/Checkout">              
            
            <Checkout/>

          </Route>  

          <Route path="/">              
            
            <Home/>

          </Route>    
        </Switch>
      </div>
    </Router>
  );
}

export default App;