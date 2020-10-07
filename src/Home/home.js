import React from 'react'
import Header from '../Homepage/Header';
import Banner from '../Homepage/Banner';
import Banner2 from '../Homepage/banner2';
import About from '../other/About';
import Footer from '../Homepage/footer';
import Team from '../other/Team';
import Booking from '../other/Booking';


export default function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <About />
            <Banner2/>
            <Booking/>
            <Team/>
            <Footer />
        </div>
        
    )
}
