import React from 'react'
import './Header.css';
import Amazon from './amazonreal.JPG';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { LinkedCameraRounded } from '@material-ui/icons';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';



function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className='header' >
            <Link to={'/'}> 
                <img className="header__logo"
                src={Amazon} />
            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user&&'/Login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="headerLineOne">
                           {!user? ' Hello Guest':`Hello ${user.email}`}
                    </span>
                    <span className="headerLineTwo">
                            {user?'Sign out':'Sign in'}
                    </span>
                </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="headerLineOne">
                                Return
                        </span>
                        <span className="headerLineTwo">
                                & Orders
                        </span>
                    </div>

                </Link>
                
                <div className="header__option">
                    <span className="headerLineOne">
                            Your
                    </span>
                    <span className="headerLineTwo">
                            Prime
                    </span>
                </div>

                <div className="header__optionBasket">
                    <Link to='/Checkout'>
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Header
