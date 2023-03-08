import React from 'react'
import '../styling/Apparel.scss'
import Arabic from'../images/arabic tee.jpg'
import BCC from '../images/BCC shirt.jpg'
import Twisted from '../images/twisted shirt.png'
import GSTR from '../images/GSTR.jpg'
import AC from '../images/AC Hoodie mockup.jpg'
import Mike from '../images/Mike.jpg'
import Malboro from '../images/malboro design.jpg'
import Vit from '../images/vit.png'
import MDNT from '../images/MDNT Trucker.jpg'
import Glow from '../images/Glow.png'

export function Apparel() {
  return (
    <div className="wrapper">
        <div className="img-reel">
            <img src={Arabic}/>
            <img src={BCC}/>
            <img src={MDNT}/>
            <img src={Glow}/>
            <img src={Twisted}/>
            <img src={GSTR}/>
            <img src={Malboro}/>
            <img src={Mike}/>
            <img src={AC}/>
            <img src={Vit}/>
        </div>
    </div>
  )
}

export default Apparel