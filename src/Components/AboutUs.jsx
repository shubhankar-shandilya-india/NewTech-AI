import React from 'react'
import { MdLocationPin } from "react-icons/md";

const AboutUs = () => {
    
    let aboutus = "At KaliTech AI, we bring the future of artificial intelligence into today's business landscape. Founded in Mumbai in 2024, our mission is to harness the transformative power of AI to revolutionize industries. We are a collective of innovators, thinkers, and builders dedicated to creating intelligent solutions that elevate business operations, drive efficiency, and unlock new potentials. Our commitment to blending cutting-edge technology with strategic insight positions us as a leading force in the realm of AI development and IT consulting for startups and mid-scale businesses.";
    return (
        <div className='text-white flex flex-col items-center justify-center' id='aboutus'>
            <div className='flex mt-7 pt-7 text-white text-2xl font-light sm:leading-none leading-[1.1] sm:text-4xl xl:text-[60px] tracking-[-0.89px] text-center '>About Us</div>
            <div className="pt-8 rounded-lg relative w-80vw mx-auto">
                <img src="./bb.jpg" alt="Bombay" className="rounded-lg w-full h-auto" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div className='flex items-center justify-center rounded-lg w-[10vw] h-[35px] bg-[#111] mb-2'>Headquarters</div>
            <div className='flex items-center'><MdLocationPin/>&nbsp;Mumbai</div>
            <div class="pt-4 px-5 pb-6 lg:px-9 text-base text-[#F5F5F5]   font-medium leading-normal lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-full mx-auto">{aboutus}</div>
        </div>
    )
}

export default AboutUs