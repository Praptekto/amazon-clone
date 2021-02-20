import React from 'react'
import './Home.css'
import Product from './Product.js'
import amazonhp from './amazonhp.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                        src={amazonhp}
                        alt="Home Container of Amazon"
                />
            
            
                <div className="home__row">
                    <Product 
                    id="111"
                    title="The lean start-Up" 
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    price={99}
                    rating={4}   
                    />                
                    <Product 
                    id="111"
                    title="Think Like a Rocket Scientist" 
                    image="https://m.media-amazon.com/images/I/41pdmxi2HeL.jpg"
                    price={99}
                    rating={4}   
                    /> 
                </div>
                    
                <div className="home__row">
                <Product 
                    id="111"
                    title="Joy at Work: Organizing Your Professional Life" 
                    image="https://m.media-amazon.com/images/I/41i0f0KtiuL.jpg"
                    price={99}
                    rating={4}   
                    /> 
                    <Product 
                    id="111"
                    title="Tiny Habits: The Small Changes That Change Everything" 
                    image="https://m.media-amazon.com/images/I/41MVYT3xzWL.jpg"
                    price={99}
                    rating={4}   
                    /> 
                    <Product 
                    id="111"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51X8sCVdbmL._SX363_BO1,204,203,200_.jpg"
                    price={99}
                    rating={4}   
                    /> 
                    
                </div>

                <div className="home__row">
                <Product 
                    id="111"
                    title="Leadership Is Language: The Hidden Power of What You Say--and What You Don't" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51pBd8s2yOL._SX329_BO1,204,203,200_.jpg"
                    price={99}
                    rating={4}   
                    /> 
                    
                </div>
            </div>

        </div>
    )
}

export default Home