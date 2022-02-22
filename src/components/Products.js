import React from 'react'
import headphones from '../assets/home/mobile/image-headphone-mobile.png'
import speakers from '../assets/home/mobile/image-speakers.png'
import earphones from '../assets/home/mobile/image-earphones.png'
const Products = () => {

    return (
        <div className="products">
            <div className="main-square">
                <div className="second-square">
                    <img src={headphones} alt="" />
                    <h4>HEADPHONES</h4>
                    <button>SHOP <span>></span></button>
                </div>
            </div>
            <div className="main-square">
                <div className="second-square">
                    <img src={speakers} alt="" />
                    <h4>SPEAKERS</h4>
                    <button>SHOP <span>></span></button>
                </div>
            </div>
            <div className="main-square">
                <div className="second-square">
                    <img src={earphones} alt="" />
                    <h4>EARPHONES</h4>
                    <button>SHOP <span>></span></button>
                </div>
            </div>

        </div>
    )
}

export default Products
