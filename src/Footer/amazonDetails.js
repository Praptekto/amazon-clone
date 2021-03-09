import React from 'react'

function AmazonDetails({title,arr1}) {
    return (
        <div className="footer__amazonDetailselement">
            <h3 className="footer__amazonDetailsTitle">{title}</h3>
            {
                arr1.map(
                    (arr)=>(
                        <a className="linkdetails" href={arr} style={{display:"block"}}>{arr}</a>
                    )
                )
            }
            
        </div>
    )
}

export default AmazonDetails;
