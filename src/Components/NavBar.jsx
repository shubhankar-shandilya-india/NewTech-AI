import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let navigate = useNavigate();
    const clicked = (varr) => {
        navigate(`/${varr}`);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between items-center w-full font-aeonik bg-[#000000bb] p-2 h-[70px] text-white'>
            <a href="/"><img className='w-14 h-14 mx-6 justify-start' src="./logo.png" alt="Logo" /></a>

            <div className='sm:hidden cursor-pointer' onClick={toggleMenu}>
                <svg className='mx-6 w-8 h-8 fill-current' viewBox='0 0 24 24'>
                    <path
                        fillRule='evenodd'
                        d='M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm16 5H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm0 4H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z'
                    />
                </svg>
            </div>

            <div className='hidden sm:flex justify-center gap-[3vw]'>
                <a href='/'>Home</a >
                <a href='#services'>Services</a >
                <a href='#careers'>Careers</a >
                <a href='#aboutus'>About Us</a >
                <a  href='#contactus'>Contact Us</a >
            </div>
            <div className='mx-6 hidden sm:flex gap-3'>
                <button onClick={()=>clicked("contactus")} className='px-4 flex items-center glow-on-hover text-xs sm:text-sm md:text-base '>Get Started</button>
            </div>
            <div className={`sm:hidden   ${isMenuOpen ? 'flex flex-col bg-black p-3 absolute w-full top-20' : 'hidden'} gap-[10px]`}>
                <a onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-center' href='/'>Home</a>
                <a onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-center' href='#services'>Services</a>
                <a onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-center' href='#careers'>Careers</a>
                <a onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-center' href='#aboutus'>About Us</a>
                <a onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-center' href='#contactus'>Contact Us</a>
                <button onClick={()=>clicked("contactus")} className='h-[8vh] glow-on-hover'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;
