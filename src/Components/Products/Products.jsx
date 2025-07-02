import React from 'react'
import './Products.css'
import product_1 from '../../assets/Product_1.png'
import product_2 from '../../assets/Product_2.png'
import product_3 from '../../assets/Product_3.png'

const Products = () => {
  return (
    <div className='products' id="Products">
        <div className="product">
            <img src={product_1} alt="" />
            <div className="caption">
                <p>Tricolor</p>
            </div>
        </div>
        <div className="product">
            <img src={product_2} alt="" />
            <div className="caption">
                <p>Valxtra</p>
            </div>
        </div>
        <div className="product">
            <img src={product_3} alt="" />
            <div className="caption">
                <p>Trisect</p>
            </div>
        </div>
    </div>
  )
}

export default Products