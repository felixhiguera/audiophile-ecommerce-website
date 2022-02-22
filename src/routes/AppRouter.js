import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Earphones from '../components/Earphones';
import EarphonesOne from '../components/EarphonesOne';
import Headphones from '../components/Headphones';
import HeadphonesOne from '../components/HeadphonesOne';
import HeadphonesThree from '../components/HeadphonesThree';
import HeadphonesTwo from '../components/HeadphonesTwo';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Speakers from '../components/Speakers';
import SpeakersOne from '../components/SpeakersOne';
import SpeakersTwo from '../components/SpeakersTwo';


const AppRouter = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <div className="contenedor">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/earphones" element={<Earphones />} />
                    <Route path="/earphonesone" element={<EarphonesOne />} />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/headphonesone" element={<HeadphonesOne />} />
                    <Route path="/headphonestwo" element={<HeadphonesTwo />} />
                    <Route path="/headphonesthree" element={<HeadphonesThree />} />
                    <Route path="/speakersone" element={<SpeakersOne />} />
                    <Route path="/speakerstwo" element={<SpeakersTwo />} />

                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default AppRouter
