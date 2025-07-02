import React from 'react'
import './About.css'
import proprietor from '../../assets/proprietor.jpg'
 

const About = () => {
  return (
    <div className='about' id="About us" >
        <div className="about-left">
            <img src={proprietor} alt="" className='proprietor' />
        </div>
        <div className="about-right">
            <h3>About Our Shop</h3>
            <h2>Rooted in Quality, Grown with Trust</h2>
            <p>Established in 2005 by Mr. Subba Rayudu Koppula in Yerramsettivari Palem, P. Gannavaram Mandal, konaseema district, our shop has been committed to delivering only the best to our customers. For nearly two decades, we’ve built trust by offering top-quality agricultural products from leading companies such as Willowood, Best Agrolimited, Tricom, Adama, Synergy, Sudarshan, and many more.</p>
            <p>Our mission is to provide farmers with reliable and effective solutions for their farming needs. We believe in long-term customer satisfaction and continue to earn loyalty by ensuring that every product on our shelves is from a trusted brand. Today, we’re proud to be a name farmers trust not just for products, but for honest guidance and quality service.</p>
        </div>
    </div>
  )
}

export default About