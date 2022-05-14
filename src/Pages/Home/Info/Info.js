import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle='Opening Hour' img={marker} bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard cardTitle='Visit Our Location' img={phone} bgColor='bg-accent'></InfoCard>
            <InfoCard cardTitle='Contact Us Now' img={clock} bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;