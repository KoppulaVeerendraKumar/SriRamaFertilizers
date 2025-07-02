import React, { useEffect, useState } from 'react'
import  './Navbar.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu-icon.png"




const Navbar = () => {

    const [sticky, setSticky] =useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);
    
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu =() =>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <span className="brand-name">SRI RAMA <br></br>FERTILIZERS</span>
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
          <li><Link to='Hero' smooth={true} offset={-80} duration={500}>Home</Link></li>
          <li><Link to='Products' smooth={true} offset={-280} duration={500}>Products</Link></li>
          <li><Link to='About us' smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to='Companies' smooth={true} offset={-220} duration={500}>Companies</Link></li>
          <li><Link to='Contact us' smooth={true} offset={-250} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar