import React from 'react'
import AboutUs from './Components/AboutUs';
import Divider from './Components/Divider';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Button from './Components/Button';
import Careers from './Components/Careers';
const Home = () => {
    return (
        <div>
            <Divider />
            <Hero />
            <Services />
            <Careers />
            <AboutUs />
            <Button />
        </div>
    )
}

export default Home