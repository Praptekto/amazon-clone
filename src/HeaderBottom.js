import {Link} from 'react-router-dom'
import React from 'react'
import PersistentDrawerLeft from './Sider'

function HeaderBottom() {
    return (
        <div className="header__bottom">
            <div className="header__bottomLeft">
                {/* <span className="header__bottomLeftElement" style={{maxHeight:"10px", maxWidth:"10px"}}> */}
                <PersistentDrawerLeft/>
                
                {/* </span> */}
                
                

                <Link className="header__bottomLeftElement">
                    Today's Deals
                </Link>
                
                <Link className="header__bottomLeftElement">
                    Praptekto's Amazon.com
                </Link>

                <Link className="header__bottomLeftElement">
                    Customer Service
                </Link>
                
                <Link className="header__bottomLeftElement">
                    Browsing History
                </Link>
                

                <Link className="header__bottomLeftElement">
                    Gift Cards
                </Link>

                <Link className="header__bottomLeftElement">
                    Buy Again
                </Link>

                <Link className="header__bottomLeftElement">
                Sell
                </Link>
            </div>
            <Link to= {'/payment'} className="header__bottomRight">
                Amazon's response to COVID-19
            </Link>
                
        </div>
    )
}

export default HeaderBottom
