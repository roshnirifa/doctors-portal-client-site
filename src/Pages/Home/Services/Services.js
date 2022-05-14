import React from 'react';
import Service from '../Service/Service';
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
            <div className='text-center my-20' >
                <h3 className='text-primary text-xl uppercase'>Our Services</h3>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                <Service cardTitle='Fluoride Treatment' img={Fluoride} bgColor='bg-gradient-to-r from-secondary to-primary'></Service>
                <Service cardTitle='Cavity Filling' img={Cavity} bgColor='bg-accent'></Service>
                <Service cardTitle='Teeth Whiting' img={Whitening} bgColor='bg-gradient-to-r from-secondary to-primary'></Service>
            </div>
        </div>
    );
};

export default Services;