import React from 'react'
import '../styling/About.scss'

export function About() {
  return (
    <div class="About">
        <div class="img-container">
            <img src="https://images.unsplash.com/photo-1616707407652-5fc148ef2e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
        </div> 
        <div class="text-container">
            <h2>ABOUT THE ARTIST</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo.</p>
        </div>
    </div>
  )
}

export default About