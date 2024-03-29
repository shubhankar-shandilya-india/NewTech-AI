import React, { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between items-center w-full font-aeonik bg-[#000000bb] p-2 h-[70px] text-white'>
            <img className='w-14 h-14 mx-6 justify-start' src="./logo.png" alt="Logo" />

            <div className='sm:hidden cursor-pointer' onClick={toggleMenu}>
                <svg className='mx-6 w-8 h-8 fill-current' viewBox='0 0 24 24'>
                    <path
                        fillRule='evenodd'
                        d='M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm16 5H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm0 4H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z'
                    />
                </svg>
            </div>

            <div className='hidden sm:flex justify-center gap-[3vw]'>
                <button>Home</button>
                <button>Services</button>
                <button>About Us</button>
                <button>Contact Us</button>
            </div>
            <div className='mx-6 hidden sm:flex gap-3'>
                <button className='px-4 flex items-center glow-on-hover text-xs sm:text-sm md:text-base '>Get Started</button>
            </div>
            <div className={`sm:hidden h-full bg-opacity-100 ${isMenuOpen ? 'flex flex-col bg-black p-3 absolute w-full top-20' : 'hidden'} gap-[10px]`}>
                <button>Home</button>
                <button>About Us</button>
                <button>Services</button>
                <button>Contact Us</button>
                <button className='h-[8vh] glow-on-hover'>Get Started</button>
            </div>
            
        </div>
    );
};

export default NavBar;