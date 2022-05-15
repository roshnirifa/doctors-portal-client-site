import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import DentalCareBanner from './DentalCareBanner/DentalCareBanner';
import Info from './Info/Info';
import MakeAppoitment from './MakeAppoitment/MakeAppoitment';
import Services from './Services/Services';
import Testimonial from './Testimonials/Testimonial';

const Home = () => {
    return (
        <div className='px-24'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
            <MakeAppoitment></MakeAppoitment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;