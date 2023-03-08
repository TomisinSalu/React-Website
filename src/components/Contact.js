import React from 'react'
import '../styling/Contact.scss';
// import {Socials} from '../Socials.js'


export function Contact() {
  return (
    <div className="contact-wrapper">
        <form enctype="multipart/form-data"> 
            <div>   
                <p className="">NAME</p>
                <input name="name" type="text" className="feedback-input" placeholder="John Doe" /> 
            </div>  
            <div>
                <p className="">E-MAIL</p>  
                <input name="email" type="text" className="feedback-input" placeholder="johndoe@email.com" />
            </div>
            <div>
                <p className="">SERVICE</p>  
                {/* <input name="email" type="text" className="feedback-input" placeholder="Select Service" /> */}
                <select name="service" className="feedback-input" placeholder="Select A Service">
                    <option value="GRAPHICS">Graphics</option>
                    <option value="GRAPHICS">Merch Design</option>
                    <option value="BRANDING">Branding</option>
                    <option value="UI/UX DESIGN">UI/UX </option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <p className="">PROJECT DESCRIPTION</p>
                <textarea name="text" className="feedback-input" placeholder="Tell us more... "></textarea>
            </div>
            {/* <div>
                <p className="">Upload Files</p>
                <input type="file" name="selectedfile"/>
            </div> */}
            <input type="submit" value="SUBMIT"/>
        </form>
    </div>
  )
}

export default Contact