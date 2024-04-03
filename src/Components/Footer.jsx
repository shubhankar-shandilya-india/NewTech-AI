import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[85%] flex justify-center'>

                <div className="container pt-12 md:pt-20 pb-2">
                    <nav>
                        <ul className="grid grid-cols-2 gap-y-2 gap-x-10 md:gap-10 xl:gap-0 md:grid-cols-3 xl:justify-between xl:flex xl:flex-wrap">
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Company</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="#aboutus">About</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="#careers">Careers</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/">Security</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/">Terms</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/">Privacy</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Contact</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm">
                                        <a href="mailto:support@kalitechai.com" className="font-normal text-neutral-400 hover:text-white">support@kalitechai.com</a>
                                    </li>
                                    <li className="flex gap-3 mt-8 text-neutral-400">
                                        <a aria-label="LinkedIn" href="https://www.linkedin.com/company/kalitech-ai/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white">
                                                <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex text-xs md:text-sm justify-between flex-col md:flex-row pt-6 md:mt-12 pb-12 border-neutral-800 border-t">
                        <span className="text-neutral-400">Copyright © 2024 Kalitech AI, Inc. All rights reserved.</span>
                        <span className="mt-4 md:mt-0 text-neutral-400">
                            <a className="text-neutral-400 font-normal" href="/">Terms of Use</a> &amp;&nbsp;
                            <a className="text-neutral-400 font-normal" href="/">Privacy Policy</a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer

