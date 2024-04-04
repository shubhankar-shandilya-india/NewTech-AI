import React from 'react';
import servicesData from '../Data/servicesData.json';

import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Careers = () => {
    let navigate = useNavigate();
    const clicked = (varr) => {
        navigate(`/${varr}`);
    };
    return (
        <div className='mb-8 pb-8 text-white flex flex-col items-center justify-center' id='careers'>
            <div className='flex mt-7 pt-7 text-white text-2xl font-light sm:leading-none leading-[1.1] sm:text-4xl xl:text-[60px] tracking-[-0.89px] text-center '>Careers</div>
            <div className="pt-8 rounded-lg relative  mx-auto flex flex-col items-center">
                <img src="./careers.jpg" alt="Bombay" className="rounded-lg w-[60%] h-auto" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div className="pt-4 px-5 pb-6 lg:px-9 text-base text-[#F5F5F5] font-medium leading-normal lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-full mx-auto">
                <h2 className="text-4xl font-semibold mb-7">Join Our Team</h2>
                <p className="text-sm mb-2">Shape the Future with KaliTech AI</p>
                <p className="text-sm mb-8 pb-8">At KaliTech AI, innovation and creativity lead the way to the future. We're on the lookout for trailblazers, problem-solvers, and tech visionaries who are ready to dive into the world of artificial intelligence and make a significant impact.</p>
                <h3 className="text-4xl font-semibold mb-6">Why KaliTech AI?</h3>
                <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-8 justify-items-center mb-8 pb-4">
                    {servicesData.items.map((data, index) => (
                        <Card key={index} title={data.title} description={data.description} wid="0" />
                    ))}
                </div>
                <h3 className="text-4xl font-semibold mb-8">Current Openings</h3>
                <div onClick={() => clicked("contactus")}  className="cursor-pointer px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-8 justify-items-center">
                    {servicesData.jobs.map((data, index) => (
                        <Card  className='cursor-pointer' key={index} title={data.title} description={data.description} wid="0" />
                    ))}
                </div>
            </div>
            <button  className='w-[15vw] h-[50px] justify-center px-4 flex items-center glow-on-hover text-xs sm:text-sm md:text-base '>Apply Now</button>
        </div>
    );
}

export default Careers;
