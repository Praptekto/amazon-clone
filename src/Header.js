import React from 'react'
import './Header.css';
import Amazon from './Amazon.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { LinkedCameraRounded } from '@material-ui/icons';
import {useStateValue} from './StateProvider';



function Header() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__logo"
                src={Amazon} />
            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="headerLineOne">
                            Hello Guest
                    </span>
                    <span className="headerLineTwo">
                            Sign in
                    </span>
                </div>
                <div className="header__option">
                    <span className="headerLineOne">
                            Return
                    </span>
                    <span className="headerLineTwo">
                            & Orders
                    </span>
                </div>
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
