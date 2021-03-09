import React from 'react'
import './Footer.css'
import AmazonDetails from './amazonDetails';
import FeatureDetails from './featureDetails';

function Footer() {
    const array1=[
        "careers",
        "blogs",
        "about amazon",
        "Sustainability",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Tours"
    ]
    const array2=[
        "Sell products on Amazon",
        "Sell apps on Amazon",
        "Become an Affiliate",
       "Advertise Your Products",
        "Self-Publish with Us",
        "Host an Amazon Hub",
        "›See More Make Money with Us"
    ]
    const array3=[
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "Amazon Currency Converter"
    ]
    const array4=[
        "Amazon and COVID-19",
        "Your Account",
       "Your Orders",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Amazon Assistant",
        "Help"
    ]
    const feature1=[
        ["Amazon Music", "Stream millions  of songs"],
        ["Sell on Amazon", "Start a Selling Account"],
        ["Book Depository", "Books With Free Delivery Worldwide"],
        ["IMDb","TV & Celebrities"],
        ["Ring",  "Smart Home Security Systems"]

    ]
    
    return (
        <div className="footer">
            
            
            <a href="#backToTop" className="footer__backToTop__a"><div className="footer__backToTop" >Back To Top</div></a>
            <div className="detailsContainer">
                <div className="footer__amazonDetails">
                    <AmazonDetails title="Get to Know Us" arr1={array1}/>
                    <AmazonDetails title="Make Money with Us" arr1={array2}/>
                    <AmazonDetails title="Amazon Payment Products" arr1={array3}/>
                    <AmazonDetails title="Let Us Help You" arr1={array4}/>
                </div>
                <div className="horLine"></div>
            </div>
            
            <div className="features__container">
                <FeatureDetails title="Get to Know Us" arr1={array1}/>
                <FeatureDetails title="Get to Know Us" arr1={array1}/>
                <FeatureDetails title="Get to Know Us" arr1={array1}/>
                <FeatureDetails title="Get to Know Us" arr1={array1}/>
                <FeatureDetails title="Get to Know Us" arr1={array1}/>
                <FeatureDetails title="Get to Know Us" arr1={array1}/>
                <FeatureDetails title="Get to Know Us" arr1={array1}/>

            </div>
            <div class="sticky">Help Center</div>
        </div>
    )
}

export default Footer
