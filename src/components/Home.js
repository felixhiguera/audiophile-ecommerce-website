import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div>
            <div className="home-top-page">
                <h3  >NEW PRODUCT</h3>
                <h1 >XX99 MARK II <br /> HEADPHONES</h1>
                <p className="body" >Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="button-dark-orange">SEE PRODUCTS</button>
            </div>
            <div className="home-products">
                <Products />
            </div>
        </div>
    )
}

export default Home
