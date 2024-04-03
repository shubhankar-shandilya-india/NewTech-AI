import React from 'react';
import { useNavigate } from 'react-router-dom';

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
                <h2 className="text-4xl font-semibold mb-4">Join Our Team</h2>
                <p className="text-xl mb-6">Shape the Future with KaliTech AI</p>
                <p className="mb-6">At KaliTech AI, innovation and creativity lead the way to the future. We're on the lookout for trailblazers, problem-solvers, and tech visionaries who are ready to dive into the world of artificial intelligence and make a significant impact.</p>
                <h3 className="text-3xl font-semibold mb-4">Why KaliTech AI?</h3>
                <ul className="list-disc pl-6 mb-6">
                    <li>Innovation at Core: Work on groundbreaking projects that challenge the status quo.</li>
                    <li>Growth & Learning: With continuous opportunities for professional development, you're always climbing higher.</li>
                    <li>Impactful Work: See the tangible impact of your work on businesses and communities.</li>
                    <li>Collaborative Culture: Join a team where every voice matters, and collaboration fuels progress.</li>
                </ul>
                <h3 className="text-3xl font-semibold mb-4">Current Openings</h3>
                <p className="mb-6">We have a variety of roles open for passionate individuals looking to make their mark in AI and tech. Explore opportunities in:</p>
                <ul className="list-disc pl-6 mb-6">
                    <li>AI and Machine Learning</li>
                    <li>Software Development</li>
                    <li>Project Management</li>
                    <li>Sales and Marketing</li>
                    <li>IT and Systems Support</li>
                    <li>And many more...</li>
                </ul>
                <h3 className="text-3xl font-semibold mb-4">Register with Us</h3>
                <p>Are you ready to start a journey where your work is about creating a smarter tomorrow? Fill out our registration form and let's explore how your talent can align with the innovative world of KaliTech AI.</p>
            </div>
            <button onClick={()=>clicked("contactus")} className='px-4 flex items-center glow-on-hover text-xs sm:text-sm md:text-base '>Get Started</button>
        </div>
    );
}

export default Careers;
