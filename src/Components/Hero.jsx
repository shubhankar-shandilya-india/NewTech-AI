import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Hero = () => {
    const texts = ['Government AI', 'Generative AI', 'Automotive AI'];
    const [textIndex, setTextIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((textIndex + 1) % texts.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [textIndex, texts.length]);
    let navigate = useNavigate();
    return (
        <div className='flex flex-col items-center mb-8 pb-8'>
            <h1 className="flex mt-7 pt-7 text-white text-4xl font-light sm:leading-none leading-[1.1] sm:text-6xl xl:text-[89px] tracking-[-0.89px] text-center ">
                <br />
                <span className="flex flex-col items-center">
                    <div className="flex flex-col gap-[2vw]">
                        <div>Revolutionize Your World</div>
                        <div className='flex gap-[2vw] justify-center'>
                            <span>with</span>
                            <span className='entrance'>KaliTech AI</span>

                        </div>
                    </div>
                </span>
            </h1>
            <div class="pt-6 font-sans text-base text-[#F5F5F5] px-4 font-medium leading-normal lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[800px] ">Unleashing the Power of AI to Transform Your Business</div>
            <div class="pt-6 font-sans text-base text-[#F5F5F5] px-4  font-medium leading-normal lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[800px] mx-auto">At KaliTech AI, we harness the synergy of advanced AI algorithms and deep learning to turn your data into actionable insights. Step into a new era of innovation and intelligence tailored for startups and growing enterprises.</div>
            <div className='pt-6 flex gap-[2vw] sm:gap-[1vw]'>
                <button className='px-4 flex items-center glow-on-hover text-xs sm:text-sm md:text-base '><a href="#services">Explore AI Solutions →</a></button>
                <button onClick={()=>navigate("/contactus")} className='px-4 flex items-center glow-on-hover text-xs sm:text-sm md:text-base '>Get Started Today →</button>
            </div>
        </div>
    );
};

export default Hero;
