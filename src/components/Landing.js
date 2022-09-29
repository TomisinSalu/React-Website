import React from 'react'
import '../styling/Landing.scss'
import BITF from '../images/BITF.jpg'
import DONDA from '../images/donda.jpg'
import dsavage from '../images/dsavage.jpg'
import burna from '../images/burna.jpg'
import monster from '../images/monster.jpg'
import playboy from '../images/playboy.jpg'
import vroy from '../images/vroy.jpg'
import ohgeesy from '../images/Ohgeesy.jpg'
import {Link} from "react-router-dom";
import {GrInstagram} from "react-icons/gr"
import {FaBehance, FaTwitter, FaEtsy} from "react-icons/fa"
import Draggable from 'react-draggable'

export function Landing() {
  return (
  <div class="Landing">
    <div class="title-container">
      <h1>PORTFOLIO</h1>
    </div>
    <div class="reel">
        <img src={DONDA} />
        <img src={monster} />
        <img src={playboy} />
        <img src={ohgeesy} />
        <img src={dsavage} />
        <img src={burna} />
        <img src={vroy} />  
        <img src={BITF} />
        <img src={DONDA} />
    
        
    </div>
    <div class="socials bottom">
      <a href="https://www.instagram.com/designworld2003/" target="_blank"><GrInstagram class="icon" /></a>
      <a href="https://www.behance.net/salutomisi99e3" target="_blank"><FaBehance class="icon"/></a>
      <a href="https://www.etsy.com/shop/PrintsByTomi?ref=profile_header" target="_blank"><FaEtsy class="icon"/></a>
      
    </div>
  </div>
  )
}

export default Landing