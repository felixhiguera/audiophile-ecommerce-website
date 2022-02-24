import React from 'react'
import Products from './Products'
import speakerstwo from '../assets/home/mobile/image-speakerstwo.png'
import speakerstwobig from '../assets/home/desktop/image-speaker-zx9.png'
import speakers7 from '../assets/home/mobile/image-speaker-zx7.jpg'
import Bringinng from './Bringinng'
import Footer from './Footer'
import headerImage from '../assets/home/desktop/image-hero.jpg';


const Home = () => {
    return (
        <div>
            <div className="home-top-page">
                <div><h3  >NEW PRODUCT</h3>
                    <h1 >XX99 MARK II <br /> HEADPHONES</h1>
                    <p className="body" >Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="button-dark-orange">SEE PRODUCTS</button></div>
                <div>
                    <img src={headerImage} alt="" />
                </div>
            </div>
            <div className="home-products">
                <Products />
            </div>
            <div className="home-cards">
                <div className="orange-card">
                    <img src={speakerstwo} className="orange-img1" alt="" />
                    <img className="orange-img2" src={speakerstwobig} alt="" />
                    <div>
                        <h2>ZX9 SPEAKER</h2>
                        <p className="body">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button className="button-black">SEE PRODUCT</button>

                    </div>

                </div>
                <div className="gray-card" >

                    <h4>Z7 SPEAKER</h4>
                    <button className="button-transparent">SEE PRODUCT</button>

                </div>
                <div className="black-and-yx1-cards">
                    <div className="black-card" >

                    </div>
                    <div className="yx1-card">
                        <h4>YX1  EARPHONES</h4>
                        <button className="button-transparent">SEE PRODUCT</button>
                    </div>

                </div>
            </div>
            <Bringinng />
            <Footer />
        </div>
    )
}

export default Home
