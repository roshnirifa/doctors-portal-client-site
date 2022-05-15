import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppoitment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-40'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 pr-20'>
                <h3 className='text-primary font-bold text-xl mb-4'>Appointment</h3>
                <h2 className='text-3xl font-bold text-white mb-4'>Make An Appointment Today</h2>
                <p className='text-white mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dolores eligendi debitis reiciendis minima reprehenderit molestiae adipisci dolorem fugiat ducimus magnam in est sint, voluptates quam aperiam! Iste assumenda necessitatibus, provident pariatur dolore ad ipsam. Eveniet aliquam dolorem fugiat? Excepturi.</p>
                <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppoitment;