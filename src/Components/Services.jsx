import React from 'react';
import servicesData from '../Data/servicesData.json';
import Card from './Card';

const Services = () => {
    return (
        <div className='flex flex-col items-center gap-[20px]'>
            <div className='flex mt-7 pt-7 text-white text-2xl font-light sm:leading-none leading-[1.1] sm:text-4xl xl:text-[60px] tracking-[-0.89px] text-center '>Our Services</div>
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-8 justify-items-center">
                {servicesData.services.map((data, index) => (
                    <Card key={index} title={data.title} description={data.description} wid="0" />
                ))}
            </div>
        </div >
    );
};

export default Services;
