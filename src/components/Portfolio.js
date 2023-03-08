import React from 'react'
import '../styling/Portfolio.scss';
import DONDA from '../images/donda.jpg'
import Poster from '../images/dsavage poster mockup.jpg'
import Clothing from '../images/arabic tee.jpg'
import Logo from '../images/Logo.jpg'
import Website from '../images/Graphic Portfolio.jpg'
import poster from '../images/Poster.jpg'
import {GrInstagram} from "react-icons/gr"
import {FaBehance, FaTwitter, FaEtsy} from "react-icons/fa"
import {Link} from "react-router-dom";


export function Portfolio() {
    return (
        <>
            <div className='content'>
                <div className='card-grid'>
                    <div className="card"><Link to="/posters"><img src={poster}/><p className='label'>POSTERS</p></Link></div>
                    <div className="card"><Link to="/logos"><img src={Logo}/><p className='label'>LOGOS</p></Link></div> 
                    <div className="card"><Link to="/apparel"><img src={Clothing}/><p className='label'>APPAREL<br/>DESIGN</p></Link></div>
                </div>
            </div>
            <div class="socials1 bottom1">
                <a href="https://www.instagram.com/designworld2003/" target="_blank"><GrInstagram class="icon1" /></a>
                <a href="https://www.behance.net/salutomisi99e3" target="_blank"><FaBehance class="icon1"/></a>
                <a href="https://www.etsy.com/shop/PrintsByTomi?ref=profile_header" target="_blank"><FaEtsy class="icon1"/></a>
            
            </div>
        </>
    );
  }

export default Portfolio