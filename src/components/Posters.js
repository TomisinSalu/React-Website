import React from 'react'

import '../styling/Posters.scss'
import BITF from '../images/BITF.jpg'
import DONDA from '../images/donda.jpg'
import dsavage from '../images/dsavage.jpg'
import burna from '../images/burna.jpg'
import monster from '../images/monster.jpg'
import playboy from '../images/playboy.jpg'
import vroy from '../images/vroy.jpg'

export function Posters() {
  return (
    <div className="wrapper">
        <div className="img-reel">
            <img src={BITF}/>
            <img src={DONDA}/>
            <img src={dsavage}/>
            <img src={burna}/>
            <img src={monster}/>
            <img src={playboy}/>
            <img src={vroy}/>
        </div>
    </div>
  )
}

export default Posters