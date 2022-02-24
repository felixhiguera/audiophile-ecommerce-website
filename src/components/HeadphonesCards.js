import React from 'react'
import xx99 from '../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';
import xx99tablet from '../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';
import xx99desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99MarkI from '../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import xx99MarkItablet from '../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx99MarkIdesktop from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx59 from '../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';
import xx59tablet from '../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg';
import xx59desktop from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';



const HeadphonesCards = () => {
    return (
        <div>
            <div className="headphones-cards">
                <div className="headphone-card">
                    <div className="headphone-card-image">
                        <img src={xx99} className="image1" alt="" />
                        <img src={xx99tablet} className="image2" alt="" />
                        <img src={xx99desktop} className="image3" alt="" />
                    </div>
                    <div className="headphone-card-text">
                        <p className="overline">NEW PRODUCT</p>
                        <h4>XX99 MARK II HEADPHONES</h4>
                        <p className="body">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <button className="button-dark-orange">SEE PRODUCT</button>
                    </div>
                </div>
                <div className="headphone-card">
                    <div className="headphone-card-image">
                        <img src={xx99MarkI} className="image1" alt="" />
                        <img src={xx99MarkItablet} className="image2" alt="" />
                        <img src={xx99MarkIdesktop} className="image3" alt="" />
                    </div>
                    <div className="headphone-card-text">
                        <h4>XX99 MARK II HEADPHONES</h4>
                        <p className="body">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                        <button className="button-dark-orange">SEE PRODUCT</button>

                    </div>
                </div>
                <div className="headphone-card">
                    <div className="headphone-card-image">
                        <img src={xx59} className="image1" alt="" />
                        <img src={xx59tablet} className="image2" alt="" />
                        <img src={xx59desktop} className="image3" alt="" />
                    </div>
                    <div className="headphone-card-text">
                        <h4>XX59 Headphones</h4>
                        <p className="body">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                        <button className="button-dark-orange">SEE PRODUCT</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadphonesCards
