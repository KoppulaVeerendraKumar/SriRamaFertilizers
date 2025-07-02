import React from 'react'
import './Companies.css'
import gallery_1 from '../../assets/Adama.jpg'
import gallery_2 from '../../assets/Bestagro.jpg'
import gallery_3 from '../../assets/Willowood.jpg'
import gallery_4 from '../../assets/Tricom.jpg'
import gallery_5 from '../../assets/Sudarshan.jpg'
import gallery_6 from '../../assets/Synergy.jpg'


const Companies = () => {
  return (
    <div className='Companies' id="Companies">
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
        </div>
    </div>
  )
}

export default Companies