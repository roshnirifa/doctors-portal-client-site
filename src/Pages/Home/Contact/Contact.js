import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='my-10 py-10'>
            <div className='text-center '>

                <div className='mb-10'>
                    <h3 className='text-primary font-bold text-xl '>Contact Us</h3>
                    <h1 className='text-4xl text-white'>Stay Connected With Us</h1>
                </div>
                <div>
                    <input type="text" placeholder="Eamil Address" class="input input-bordered w-full max-w-xs mb-3" /> <br />
                    <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs mb-3" /><br />
                    <textarea class="textarea w-full max-w-xs textarea-bordered pb-10" placeholder="Your Message"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contact;