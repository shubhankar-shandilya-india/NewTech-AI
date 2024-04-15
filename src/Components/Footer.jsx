import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[85%] flex justify-center'>

                <div className="container pt-12 md:pt-20 pb-2">
                    <nav>
                        <ul className="grid grid-cols-2 gap-y-2 gap-x-10 md:gap-10 xl:gap-0 md:grid-cols-3 xl:justify-between xl:flex xl:flex-wrap">
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Resources</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/blog">Blog</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/customers">Customers</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/events">Events</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/open-av-datasets">Open Datasets</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/docs">Documentation</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides">Guides</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="https://exchange.newtechai.com/">Community</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/ai-readiness-report">AI Readiness Report 2023</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Guides</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides/data-labeling-annotation-guide">Data Labeling</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides/model-training-building">ML Model Training</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides/diffusion-models-guide">Diffusion Models</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides/ai-for-ecommerce">Guide to AI for eCommerce</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides/computer-vision">Computer Vision Applications</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/guides/large-language-models">Large Language Models</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Products</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/data-engine">newtechai Data Engine</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/genai-platform">newtechai GenAI Platform</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/donovan">newtechai Donovan</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Government</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/defense">Defense</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/federal">Federal</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/public-sector">Public Sector</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Company</h2>
                                <ul>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/about">About</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/careers">Careers</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/security">Security</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/legal/terms">Terms</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                                        <a className="font-normal text-neutral-400 hover:text-white" href="/legal/privacy">Privacy</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="mb-8 md:w-auto md:mb-0">
                                <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">Contact</h2>
                                <ul>
                                    <li className="flex mb-3">
                                        <a className="font-normal text-xs md:text-sm text-neutral-400 hover:text-white" href="/sales">sales@newtechai.com</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm">
                                        <a href="mailto:support@newtechai.com" className="font-normal  text-neutral-400 hover:text-white">support@newtechai.com</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm">
                                        <a href="mailto:careers@newtechai.com" className="font-normal  text-neutral-400 hover:text-white">careers@newtechai.com</a>
                                    </li>
                                    <li className="flex mb-3 text-xs md:text-sm">
                                        <a href="mailto:press@newtechai.com" className="font-normal  text-neutral-400 hover:text-white">press@newtechai.com</a>
                                    </li>
                                    <li className="flex gap-3 mt-8 text-neutral-400">
                                        <a aria-label="Twitter" href="https://x.com/newtechai_ai">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white">
                                                <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z"></path>
                                            </svg>
                                        </a>
                                        <a aria-label="Facebook" href="https://www.facebook.com/newtechaiapi">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white">
                                                <path d="M24.147 12.073C24.147 5.405 18.74 0 12.073 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.187 24v-8.437H7.12v-3.49h3.066v-2.66c0-3.025 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.971h-1.523c-1.5 0-1.967.93-1.967 1.887v2.263h3.348l-.535 3.49H13.96V24c5.772-.906 10.187-5.9 10.187-11.927z"></path>
                                            </svg>
                                        </a>
                                        <a aria-label="LinkedIn" href="https://www.linkedin.com/company/newtechaiai">
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
                        <span className="text-neutral-400">Copyright © 2024 NewTech ai, Inc. All rights reserved.</span>
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

