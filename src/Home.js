import React from 'react'
import AboutUs from './Components/AboutUs';
import Divider from './Components/Divider';
import Hero from './Components/Hero';
import Services from './Components/Services';
const Home = () => {
    return (
        <div>
            <Divider />
            <Hero />
            <Services />
            <AboutUs />
        </div>
    )
}

export default Home