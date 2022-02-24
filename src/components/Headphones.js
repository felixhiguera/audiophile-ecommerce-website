import React from 'react'
import Bringinng from './Bringinng'
import HeadphonesCards from './HeadphonesCards'
import Products from './Products'
import Footer from './Footer'

const Headphones = () => {
    return (
        <div>
            <div className="headphones-title">
                <h4>HEADPHONES</h4>
            </div>
            <HeadphonesCards />
            <div className="home-products">
                <Products />
            </div>
            <Bringinng />
            <Footer />


        </div>
    )
}

export default Headphones
