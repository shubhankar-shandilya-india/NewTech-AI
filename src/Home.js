import React from 'react'
import AboutUs from './Components/AboutUs';
import Divider from './Components/Divider';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Button from './Components/Button';
const Home = () => {
    return (
        <div>
            <Divider />
            <Hero />
            <Services />
            <AboutUs />
            <Button />
        </div>
    )
}

export default Home