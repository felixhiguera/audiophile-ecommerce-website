import React from 'react'
import gear from '../assets/shared/mobile/image-best-gear.jpg'
import gear2 from '../assets/shared/tablet/image-best-gear.jpg'
import gear3 from '../assets/shared/desktop/image-best-gear.jpg'

const Bringinng = () => {
    return (
        <div>
            <div className="bringing-card">
                <img src={gear} className="image1" alt="" />
                <img src={gear2} className="image2" alt="" />
                <img src={gear3} className="image3" alt="" />
                <div>

                    <h4>Bringing you the <span>best</span> audio gear</h4>
                    <p className="body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </div>
        </div>
    )
}

export default Bringinng
