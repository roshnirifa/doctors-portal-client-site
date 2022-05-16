import React from 'react';
import Service from '../../Home/Service/Service';
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: Fluoride

        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: Cavity

        },
        {
            _id: 3,
            name: "Teeth Whiting",
            description: "",
            img: Whitening

        }

    ]
    return (
        <div>
            <div className='text-center my-20' >
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;