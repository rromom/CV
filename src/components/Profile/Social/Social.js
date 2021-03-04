import React from 'react'

import IcTwitter from "../../../images/icons/twitter.svg"
import IcFacebook from "../../../images/icons/facebook.svg"
import IcInstagram from "../../../images/icons/instagram.svg"
import IcLinkedin from "../../../images/icons/linkedin.svg"
import IcWeb from "../../../images/icons/web.svg"

import "./Social.scss"

const socialMedia = [
    {
        icon:<IcTwitter/>,
        link:"https://twitter.com/patricio123433"
    },
    {
        icon:<IcFacebook/>,
        link:"https://www.facebook.com/profile.php?id=100012734476251"
    },
    {
        icon:<IcInstagram/>,
        link:"https://www.instagram.com/rromom/"
    },
    {
        icon:<IcLinkedin/>,
        link:"https://www.linkedin.com/in/ricardo-romo-83b5651a7"
    },
    {
        icon:<IcWeb/>,
        link:""
    },
]

export default function Social() {
    return (
        <div className="social">
            {socialMedia.map((item,index)=>(
            <a key={index} href={item.link} target="_blank" rel="noreferrer noopener">
            {item.icon}
            </a>
            ))}
        </div>
    )
}
