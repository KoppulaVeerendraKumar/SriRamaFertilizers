import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Companies from './Components/Companies/Companies'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <div className="container"> 
    <Title  subTitle='Our Products' title='What We Provide'/>
    <Products />
    <About />
    <Title subTitle='Brands' title='Our Trusted Partners' />
    <Companies />
    <Title subTitle='Contact Us' title='Get in Touch' />
    <Contact />
    <Footer />
   </div>
   
   </>
  )
}

export default App