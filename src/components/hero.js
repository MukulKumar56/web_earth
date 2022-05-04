import React from 'react'
import { Link } from 'react-router-dom'

import './hero.css'
import './text-animation.css'

const Hero = () => {
  return (
<>


<section className="hero">

    <div className="hero-content">
    
       <h1 className="hero-title typewriter">
          Save earth
       </h1>
         
       <h2 className="hero-subtitle">
           Celebrate earth day every day! Save earth Save future Save life 
       </h2>
         
       <Link to ='/post1'>
       <button  className="glow-on-hover" type="button">Learn more...</button></Link>
    
    </div>

</section>
    </>
  )
}

export default Hero